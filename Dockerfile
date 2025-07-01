# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --chown=node:node package*.json .

RUN npm install --clean

RUN npm install sharp

COPY --chown=node:node . .

RUN npm run build

# Run output in a clean environment

FROM alpine AS runner

WORKDIR /app

ENV NODE_ENV="production"
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

LABEL authors="botprzemek,pawelos231,akolt19d,nozowymrozon"

RUN apk add --update nodejs

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]