const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

// Crear un nuevo doctor
router.post('/', doctorController.createDoctor);

// Obtener todos los doctores
router.get('/', doctorController.getDoctor);

// Obtener un doctor por su ID
router.get('/:id', doctorController.getDoctorById);

// Actualizar un doctor por su ID
router.put('/:id', doctorController.updateDoctor);

// Eliminar un doctor por su ID
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;