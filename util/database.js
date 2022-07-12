const Sequelize = require('sequelize');
const database = require('../util/database');


const sequelize = new Sequelize('node-complete', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
 