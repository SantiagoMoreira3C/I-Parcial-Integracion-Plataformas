FROM node

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 45000

CMD [ "npm","run","serve" ]