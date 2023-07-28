# FROM node:18.7.0-alpine
# WORKDIR /app
# COPY ./package.json ./
# RUN npm i
# COPY . .
# CMD ["npm","run","start"]

FROM node:18.7.0-alpine
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 3000
CMD node server.js