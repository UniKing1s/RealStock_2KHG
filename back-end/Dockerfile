FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json index.js .
RUN npm ci
COPY . .
expose 5000
CMD [ "npm", "start" ]


