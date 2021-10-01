FROM node:14.16.0-alpine3.10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install  nodemon
RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm" , "run" , "dev"]