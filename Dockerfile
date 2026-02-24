FROM node:24-alpine
WORKDIR /app
EXPOSE 3000

RUN apk add --no-cache git bash

COPY start.sh /app/start.sh
COPY .env /app/.env
COPY .env.production /app/.env.production

ENTRYPOINT [ "/app/start.sh" ]