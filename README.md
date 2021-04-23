#  GETTING STARTED WITH PUBLISHAPP

This is a project built in order to show the different publications of different authors.

This project was created using the following technologies:

# TECHNOLOGIES

* React
* Redux
* Styled-components
* NodeJS
* Serverless
* AWS Lambda
* AWS Amplify
* Sequelize
* PostgreSQL (AWS)
* Material-UI
* Jest
* Supertest
* Postman

# LIVE

To see this project live click de following link  [PublishApp](https://main.d29ab0o80arhf.amplifyapp.com/)

# ENDPOINTS

* Publications endpoint https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/publications
* Authors endpoint https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/authors

You can learn more in the [ PublishApp documentation](https://documenter.getpostman.com/view/9236496/TzJx8bqa)

# RUNNING THE APP

# LOCAL WITH DOCKER

In the console from your project directory: 
- docker-compose up --build

# LOCAL WITHOUT DOCKER

From the backend directory runs the following commands:
- npm install
- npm run reset-db
- npm run serverless-off

From the frontend directory runs the following commands:
- yarn install
- yarn build
- yarn start

# API INTEGRATION AND UNIT TESTING
From the project directory runs the following commands:
- npm run serverless-off
- npm run integration

# RESET, CREATE AND SEED THE DATABASE
From the project directory runs the following commands:
- npm run reset-db



