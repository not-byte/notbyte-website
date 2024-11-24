# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS setup

ARG SMTP_HOST
ARG SMTP_USER
ARG SMTP_PASSWORD

ENV SMTP_HOST=${SMTP_HOST}
ENV SMTP_USER=${SMTP_USER}
ENV SMTP_PASSWORD=${SMTP_PASSWORD}

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm install --clean

RUN npm install sharp

COPY --chown=node:node . .

RUN npm run build

# Setup production dependecies

FROM setup AS production

WORKDIR /app

COPY --chown=node:node package*.json .

ENV NODE_ENV=production

RUN npm install --clean --omit=dev

COPY --from=setup --chown=node:node /app/.next ./.next

RUN npm prune --omit=dev

# Create a clean environment

FROM alpine AS runner

ENV NODE_ENV=production

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon,braspi"

RUN apk add --update nodejs

WORKDIR /app

COPY --from=production --chown=node:node /app/.next/standalone ./standalone
COPY --from=production --chown=node:node /app/.next/static ./standalone/static

COPY --from=setup --chown=node:node /app/public ./standalone/public

CMD ["node", "./standalone/server.js"]

EXPOSE 3000
