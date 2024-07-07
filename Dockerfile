FROM node:current-alpine

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon"

ARG EMAIL_HOST
ARG EMAIL_PASS
ARG EMAIL_USER

ENV EMAIL_HOST ${EMAIL_HOST}
ENV EMAIL_PASS ${EMAIL_PASS}
ENV EMAIL_USER ${EMAIL_USER}

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000

