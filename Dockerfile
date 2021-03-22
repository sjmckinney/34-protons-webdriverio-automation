FROM node:14
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
   && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
   && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz
ADD . /app
WORKDIR /app
RUN npm install