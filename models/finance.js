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
  finance_vendor_comments: {
   type: DataTypes.STRING(500),
   allowNull: true,
  },
  invoice_id: {
   type: DataTypes.INTEGER,
   references: {
    model: 'invoice',
    key: 'invoice_id',
  },
  },
   vendor_id: {
   type: DataTypes.INTEGER,
   references: {
    model: 'vendor',
    key: 'vendor_id',
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