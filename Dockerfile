FROM node:8.1

RUN mkdir /app
WORKDIR /app
COPY package.json .

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm","run","gulp"]
