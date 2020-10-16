FROM node:12.13.0-alpine as builder

EXPOSE 80
WORKDIR /app

COPY . /app

RUN \
  yarn config set registry https://repo.joom.it/repository/npm-proxy/ && \
  yarn install --prefer-offline --frozen-lockfile --no-color && \
  NODE_ENV=production yarn run build && \
  yarn install --production --prefer-offline --frozen-lockfile --no-color && \
  yarn cache clean

CMD ["yarn", "run", "--silent", "start", "-p", "80"]
