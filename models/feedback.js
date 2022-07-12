const Sequelize = require('sequelize');

const sequelize = require('../util/database');
 

const Feedback = sequelize.define('feedback', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  uid: Sequelize.INTEGER,
  pid: Sequelize.INTEGER,
  comments: Sequelize.STRING,
  suggestions: Sequelize.STRING,
  rating: Sequelize.INTEGER 
}); 

module.exports = Feedback;
 