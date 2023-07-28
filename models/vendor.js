const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.BIGINT,
      validate: {
        len: [10]
      },
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
      type: DataTypes.STRING,
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
      allowNull: false,
      defaultValue: false
    },  
    authorized_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorized_phone_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        len: [10]
      },
    },
    authorized_signature: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    }, 
  },
  {
  sequelize,
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  modelName: 'vendor',
}
);


module.exports = Vendor;