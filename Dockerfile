# node 16
FROM node:16

RUN apt-get update
RUN apt-get -y install mc

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

# prepare app ->>
RUN bash install.sh
# <<- prepare app

EXPOSE 3000


CMD ["npm", "run", "dev"]
