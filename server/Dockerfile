From node:14.16.0-alpine3.10

WORKDIR /usr/src/app

copy package.json ./

RUN npm install  nodemon
Run npm install 

COPY . .

EXPOSE 5000

CMD ["npm" , "run" , "dev"]