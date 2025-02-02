const Doctor = require('../models/Doctor.model');

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialty, phone, address, email } = req.body;

    // Validaciones básicas
    if (!name || !specialty || !phone || !address || !email ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Verificar si el email ya está registrado
    const existingDoctor = await Doctor.findOne({ where: { email } });
    if (existingDoctor) {
      return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    const doctor = await Doctor.create({ name, specialization, email, phone });
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el doctor.' });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los doctores.' });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor no encontrado.' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el doctor.' });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const { name, specialty, phone, address, email } = req.body;

    // Validaciones básicas
    if (!name || !specialty || !phone || !address || !email ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor no encontrado.' });
    }

    await doctor.update({ name, specialization, email, phone });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el doctor.' });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor no encontrado.' });
    }

    await doctor.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el doctor.' });
  }
};