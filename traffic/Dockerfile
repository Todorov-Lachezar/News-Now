from node:14

WORKDIR /usr/app

EXPOSE 8080

COPY package.json .

RUN npm i --quiet

COPY . .

CMD ["npm", "start"]
