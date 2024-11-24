FROM node:current-alpine

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon,braspi"

ARG SMTP_HOST
ARG SMTP_USER
ARG SMTP_PASSWORD

ENV SMTP_HOST=${SMTP_HOST}
ENV SMTP_USER=${SMTP_USER}
ENV SMTP_PASSWORD=${SMTP_PASSWORD}

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000

