const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model { }

User.init(
 {
  user_id: {
   type: DataTypes.INTEGER,
   autoIncrement: true,
   allowNull: false,
   primaryKey: true
  },
// Revisit for Regex
  user_email: {
   type: DataTypes.STRING,
   allowNull: false
  },
  username: {
   type: DataTypes.STRING,
   allowNull: false
  },
  status: {
   type: DataTypes.ENUM('finance', 'vendor'),
   allowNull: false,
  },
 // Revisit must include 1 uppercase, 1 lowercase, 1 special character, 1 number
  password: {
   type: DataTypes.STRING,
   allowNull: false,
   validate: {
    len: [8]
   },
  }
 },
 {
  sequelize,
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  modelName: 'user',
 }
);

module.exports = User;


  // hooks: {
  //  async beforeCreate(newUserData) {
  //   newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //   return newUserData;
  //  },
  //  async beforeUpdate(updatedUserData) {
  //   updatedUserData.password = await bcrypt.hash(
  //    updatedUserData.password,
  //    10
  //   );
  //   return updatedUserData;
  //  },
  // },