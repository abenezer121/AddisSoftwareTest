From node:14.16.0-alpine3.10

WORKDIR /usr/src/app

copy package*.json ./


Run npm install -qy

COPY . .

EXPOSE 3000

CMD ["npm" , "run" , "start"]