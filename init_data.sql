-- Insertar datos iniciales en la tabla doctors
INSERT INTO doctors (id, name, specialty, phone, address, email) VALUES
(1, 'Dra. María Gómez', 'Neonatología', '63524178', 'Calle 21 de Calacoto #1254/Zona Sur - La Paz', 'maria.gomez@consultorio.com'),
(2, 'Dr. Jose Dominguez', 'Neumología Pediátrica', '74859641', 'Calle los alamos #6547b/Zona Achumani - La Paz', 'jose.dominguez@consultorio.com'),
(3, 'Dra. Maria Illanes Campero', 'Pediatría', '74859641', 'Calle Ballivian Edificio Torres Center Piso 7 #157b/Zona sur - La Paz', 'maria.illanes@consultorio.com'),
(4, 'Dra. Adela Zambrana', 'Dermatología', '68748596', 'Calle Ingavi #365/Zona Central', 'adela.zambrana@gmail.com'),
(5, 'Dr. Isaac Alvarez', 'Traumatología', '74851263', 'Av. Busch Edificio Los Cisnes piso 7 #47b Zona Miraflores', 'issac.alvarez@gmail.com');

-- Insertar datos iniciales en la tabla patients
INSERT INTO patients (id, name, birthdate, gender, contact, doctor_id) VALUES
(1, 'Ana Lopez', '2021-01-26', 'Femenino', '74859641', 1),
(2, 'Yoel Dominguez', '2018-06-13', 'Masculino', '69854157', 2),
(3, 'Fernando Valdivia', '2019-02-02', 'Masculino', '69857415', 3),
(4, 'Rosa Montesinos', '2017-10-13', 'Femenino', '63987541', 4),
(5, 'Michel Peres Solorzano', '2024-02-10', 'Femenino', '63587412', 5),
(6, 'Daniela Aldunate', '2023-12-20', 'Femenino', '67854152', 1),
(7, 'Daniela Aldunate', '2023-12-20', 'Femenino', '67854152', 2);

-- Insertar datos iniciales en la tabla appointments
INSERT INTO appointments (id, date, time, doctor_id, patient_id) VALUES
(1, '2024-12-23', '15:30', 3, 1),
(2, '2024-12-26', '11:00', 4, 4),
(3, '2024-12-24', '16:15', 4, 6),
(4, '2024-12-26', '08:48', 2, 3),
(5, '2024-12-24', '18:00', 5, 5),
(6, '2024-12-27', '09:00', 5, 3),
(7, '2024-12-27', '14:30', 5, 7);

-- Insertar datos iniciales en la tabla consultations
INSERT INTO consultations (id, diagnosis, treatment, date, time, doctor_id, patient_id) VALUES
(1, 'Tos persistente con flemas en los pulmones.', 'Nebulizaciones dos veces al día y aspersor cada 8 hrs, consulta a coordinar en 10 días.', '2024-12-23', '15:25', 3, 2),
(2, 'Flemas en el pulmón derecho', 'Jarabe amoxi duo 10%, cada 6 hrs durante 10 días, después control médico al 11avo día terminado el tratamiento médico.', '2024-12-24', '10:00', 4, 4);

-- Actualizar secuencias para evitar problemas de id duplicados
SELECT setval(pg_get_serial_sequence('doctors', 'id'), coalesce(max(id), 0) + 1, false) FROM doctors;
SELECT setval(pg_get_serial_sequence('patients', 'id'), coalesce(max(id), 0) + 1, false) FROM patients;
SELECT setval(pg_get_serial_sequence('appointments', 'id'), coalesce(max(id), 0) + 1, false) FROM appointments;
SELECT setval(pg_get_serial_sequence('consultations', 'id'), coalesce(max(id), 0) + 1, false) FROM consultations;