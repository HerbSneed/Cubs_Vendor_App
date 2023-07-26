const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Eft extends Model {}

Eft.init(
  {
    eft_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    account_number: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    routing_number: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    modelName: 'eft',
  }
);

module.exports = Eft;
