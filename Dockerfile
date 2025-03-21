FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --verbose

EXPOSE 5173