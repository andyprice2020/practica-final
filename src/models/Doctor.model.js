const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Doctor = sequelize.define('doctors', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },  
});

module.exports = Doctor;