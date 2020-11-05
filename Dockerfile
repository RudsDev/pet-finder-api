FROM node:alpine

LABEL version="0.14" mantainer="ruds.devel@gmail.com"

ENV HOME=/home/apps

RUN adduser --home $HOME --disabled-password --shell /bin/false apps &&\
 	mkdir -p $HOME/pet-finder-api/node_modules &&\
	chown -R apps:apps $HOME/*

WORKDIR $HOME/pet-finder-api

COPY package*.json $HOME/pet-finder-api/

RUN npm install --silent --progress=false

COPY . $HOME/pet-finder-api/

COPY --chown=apps:apps . $HOME/pet-finder-api/

USER apps

EXPOSE 4000

CMD ["npm", "run", "dev-docker"]
