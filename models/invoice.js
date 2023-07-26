const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invoice extends Model {}

Invoice.init(
  {
    invoice_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    invoice_document: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vendor_comments: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finance_comments: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('received', 'pending', 'approved', 'paid-out'),
      allowNull: false,
      defaultValue: 'received',
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'vendor',
        key: 'vendor_id',
      },
    },
    finance_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'finance',
        key: 'finance_id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'invoice',
  }
);

module.exports = Invoice;