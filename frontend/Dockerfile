FROM node

WORKDIR /client

COPY package*.json /client/

RUN yarn install

COPY . /frontend/

EXPOSE 3000
CMD [ "yarn", "start"]
