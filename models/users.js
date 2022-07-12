const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Packets = require('../models/packets');


const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  country:Sequelize.STRING,
  state:Sequelize.STRING,
  city:Sequelize.STRING,
  zipcode:Sequelize.INTEGER,
}); 
 
module.exports = User;
