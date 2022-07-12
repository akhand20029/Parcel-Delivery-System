const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Parcel = sequelize.define('parcel', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  uid: Sequelize.INTEGER,
  type:Sequelize.STRING,
  weight: Sequelize.INTEGER,
  length: Sequelize.INTEGER,
  breadth: Sequelize.INTEGER,
  drop: Sequelize.STRING,
  alternate_phone: Sequelize.STRING,
  coupon: Sequelize.STRING,
  cost_estimation: Sequelize.STRING, 
  tracking_id: Sequelize.STRING,
  pickup: Sequelize.STRING
}); 
 


 

module.exports = Parcel;
 