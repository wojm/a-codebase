FROM openjdk:alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN javac *.java

RUN apk add junit --verbose --root /usr/src/downloads


CMD [""]
