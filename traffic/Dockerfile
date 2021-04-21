from node:14

WORKDIR /usr/app

EXPOSE 5000/tcp

COPY package.json .

RUN npm i --quiet

COPY . .

CMD ["npm", "start"]
