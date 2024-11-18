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

COPY --chown=node:node . .

RUN npm run build

# Setup production dependecies

FROM setup AS production

WORKDIR /app

COPY --chown=node:node package*.json .

ENV NODE_ENV=production

RUN npm install --clean --production

COPY --from=setup --chown=node:node /app/.next ./.next

RUN npm prune --omit=dev

# Create a clean environment

FROM alpine AS runner

ENV NODE_ENV=production

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon"

RUN apk add --update nodejs npm

WORKDIR /app

COPY --from=production --chown=node:node /app/.next ./.next
COPY --from=production --chown=node:node /app/node_modules ./node_modules
COPY --from=production --chown=node:node /app/package.json ./package.json

RUN npm run start

EXPOSE 3000
