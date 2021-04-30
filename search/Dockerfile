from node:14

WORKDIR /usr/app

COPY package.json .

RUN npm i --quiet

COPY . .

CMD ["npm", "start"]
