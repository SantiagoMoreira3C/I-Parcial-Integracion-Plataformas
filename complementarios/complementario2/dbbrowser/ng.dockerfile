FROM node:16.15.0

WORKDIR /app

COPY package.json .

RUN npm install 

RUN npm install -g @angular/cli@15.2.7

COPY . .

EXPOSE 4200

CMD ["npm", "start"]




