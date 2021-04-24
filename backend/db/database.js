const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

// Database connection
module.exports = new Sequelize(
  process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialectModule: pg,
    dialect: 'postgres',
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en',
  },
);
