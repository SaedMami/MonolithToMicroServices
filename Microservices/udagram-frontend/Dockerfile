FROM node:13 AS builder

COPY . ./udagram-frontend
WORKDIR /udagram-frontend
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /udagram-frontend/www/ /usr/share/nginx/html

EXPOSE 80