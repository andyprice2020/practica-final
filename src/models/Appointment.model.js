const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Appointment = sequelize.define('appointments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Patient',
      key: 'id',
    },
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Doctor',
      key: 'id',
    },
  },
});

module.exports = Appointment;