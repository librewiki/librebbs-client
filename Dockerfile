FROM node:current-alpine3.11

ADD . /app
WORKDIR /app

RUN ./setup.sh

EXPOSE 8080
CMD npm run build