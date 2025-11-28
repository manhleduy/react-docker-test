FROM node:20-alpine

WORKDIR /react-docker/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD npm run dev