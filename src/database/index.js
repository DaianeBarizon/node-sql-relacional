const Sequelize = require('sequelize');
const dbConfig = require('../config/databse');

const connection = new Sequelize(dbConfig);

module.exports = connection;