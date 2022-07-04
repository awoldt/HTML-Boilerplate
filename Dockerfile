FROM node:16-alpine
WORKDIR /
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "start"]