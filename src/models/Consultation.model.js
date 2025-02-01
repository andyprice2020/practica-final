const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Consultation = sequelize.define('consultations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  treatment: {
    type: DataTypes.TEXT,
    allowNull: false,
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

module.exports = Consultation;