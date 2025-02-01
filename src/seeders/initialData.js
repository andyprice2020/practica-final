const Doctor = require('../models/Doctor');
const Paciente = require('../models/Paciente');
const Cita = require('../models/Cita');
const Consulta = require('../models/Consulta');

const loadInitialData = async () => {
  try {
    // Verificar si ya existen datos en la base de datos
    const doctorsCount = await Doctor.count();
    if (doctorsCount === 0) {
      // Crear doctores
      const doctor1 = await Doctor.create({
        name: 'Dr. Juan Pérez',
        specialization: 'Pediatría General',
        email: 'juan.perez@clinica.com',
        phone: '555-1234',
      });

      const doctor2 = await Doctor.create({
        name: 'Dra. María Gómez',
        specialization: 'Neonatología',
        email: 'maria.gomez@clinica.com',
        phone: '555-5678',
      });

      // Crear pacientes
      const paciente1 = await Paciente.create({
        name: 'Carlos López',
        birthdate: '2015-03-15',
        gender: 'Masculino',
        doctor_id: doctor1.id,
      });

      const paciente2 = await Paciente.create({
        name: 'Ana Martínez',
        birthdate: '2018-07-22',
        gender: 'Femenino',
        doctor_id: doctor2.id,
      });

      // Crear citas
      const cita1 = await Cita.create({
        date: '2023-10-25',
        time: '10:00',
        patient_id: paciente1.id,
      });

      const cita2 = await Cita.create({
        date: '2023-10-26',
        time: '11:00',
        patient_id: paciente2.id,
      });

      // Crear consultas
      await Consulta.create({
        diagnosis: 'Resfriado común',
        treatment: 'Reposo y líquidos',
        notes: 'El paciente presenta síntomas leves',
        appointment_id: cita1.id,
      });

      await Consulta.create({
        diagnosis: 'Control de rutina',
        treatment: 'Vacunación',
        notes: 'El paciente se encuentra en buen estado',
        appointment_id: cita2.id,
      });

      console.log('Datos iniciales cargados exitosamente.');
    } else {
      console.log('Ya existen datos en la base de datos. No se cargaron datos iniciales.');
    }
  } catch (error) {
    console.error('Error al cargar datos iniciales:', error);
  }
};

module.exports = loadInitialData;