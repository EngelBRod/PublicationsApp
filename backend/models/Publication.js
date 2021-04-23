const Sequelize = require('sequelize');
const db = require('../db/database');

const publication = db.define('publication', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: Sequelize.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

}, {
  timestamps: false,
});
// eslint-disable-next-line no-console
console.log(publication);

module.exports = publication;
