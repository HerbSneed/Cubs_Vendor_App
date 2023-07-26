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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    remittance_address: {
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
    authorized_signature: {
      type: DataTypes.Blob ('long'),
      allowNull: true,
    },
    finance_vendor_comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
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
  hooks: {
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
  },
  sequelize,
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  modelName: 'vendor',
}
);

module.exports = Vendor;