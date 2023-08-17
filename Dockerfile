FROM node:16.13.1-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN yarn build:web

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/web-build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]