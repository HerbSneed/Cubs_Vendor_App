const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vendor extends Model {}

Vendor.init(
    {
    vendor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_MiddleInt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tax_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_phone_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    remittance_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code:{
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remittance_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_provided: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minority_ownership: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },  
    authorized_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorized_phone_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    authorized_signature: {
      type: DataTypes.BLOB,
      allowNull: false,
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
    }
  },
  {
  sequelize,
  underscored: true,
  freezeTableName: true,
  modelName: 'vendor',
}
);


module.exports = Vendor;