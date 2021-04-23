FROM node

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["sh","-c","npm run reset-db && npm run serverless-off"]
