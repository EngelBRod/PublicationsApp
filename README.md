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
THIS PROJECT IS RUNNING ON AWS

# ENDPOINTS

* Publications endpoint https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/publications
* Authors endpoint https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/authors

You can learn more in the [ PublishApp documentation](https://documenter.getpostman.com/view/9236496/TzJx8bqa)

# RUNNING THE APP

# LOCAL WITH DOCKER

From the projects directory runs the following commands: 
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

# API INTEGRATION AND UNIT TESTING FROM DOCKER
- npm run integration from docker's backend cli

# RESET, CREATE AND SEED THE DATABASE
From the project directory runs the following commands:
- npm run reset-db

# ENVIRONMENT VARIABLES
Since this project is for testing purposes the environment variables are being shared.
DO NOT SHARE ENVIROMENT VARIABLES IN PUBLIC PROJECTS!

Backend:
- DB_HOSTNAME = sweatworks.ciheueemzgcu.us-east-2.rds.amazonaws.com
- DB_PORT = 5432
- DB_USERNAME = postgres
- DB_NAME = sweatworks
- DB_PASSWORD = root1739

Frontend:
- REACT_APP_PUBLICATIONS = https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/publications
- REACT_APP_AUTHORS = https://ctoeaxuur5.execute-api.us-east-1.amazonaws.com/dev/authors