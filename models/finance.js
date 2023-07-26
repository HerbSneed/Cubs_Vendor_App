const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finance extends Model { }

Finance.init(
 {
  finance_id: {
   type: DataTypes.INTEGER,
   autoIncrement: true,
   allowNull: false,
   primaryKey: true
  },
  first_name: {
   type: DataTypes.STRING,
   allowNull: false
  },
  last_name: {
   type: DataTypes.STRING,
   allowNull: false
  },
  invoice_id: {
   type: DataTypes.INTEGER,
   references: {
    model: 'invoice',
    key: 'invoice_id',
   },
  }
 },
 {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'finance',
 }
);

module.exports = Finance;