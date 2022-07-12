const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payments = sequelize.define('payments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  paid: Sequelize.INTEGER,
coupon: Sequelize.STRING,
  cost_estimation: Sequelize.INTEGER,
  discount_cost :Sequelize.INTEGER,
  tracking_id: Sequelize.INTEGER,
}); 
 




module.exports = Payments;
 