FROM node:13

ARG POSTGRES_USERNAME
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB
ARG POSTGRES_HOST
ARG AWS_REGION
ARG AWS_PROFILE
ARG AWS_BUCKET
ARG URL
ARG JWT_SECRET

ENV POSTGRES_USERNAME=$POSTGRES_USERNAME
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_HOST=$POSTGRES_HOST
ENV AWS_REGION=$AWS_REGION
ENV AWS_PROFILE=$AWS_PROFILE
ENV AWS_BUCKET=$AWS_BUCKET
ENV URL=$URL
ENV JWT_SECRET=$JWT_SECRET

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run tsc

CMD ["node", "./www/server.js"]

EXPOSE 8080