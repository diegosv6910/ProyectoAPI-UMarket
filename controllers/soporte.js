/*  Archivo controllers/soporte.js
 *  Simulando la respuesta de objetos soporte
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const Soporte = require('../models/Soporte')

function crearSoporte(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var soporte = new Soporte(req.body)
  res.status(201).send(soporte)
}

function obtenerSoporte(req, res) {
  // Simulando dos usuarios y respondiendolos
  var soporte1 = new Soporte(1, 'Sop1', 'Morelos', '7771306246', 'correo1@gmail.com', 'urlfoto1');
  var soporte2 = new Soporte(2, 'soporte2', 'CDMX', '7774062533', 'correo2@gmail.com', 'urlfoto2');
  res.send([soporte1, soporte2])
}

function modificarSoporte(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var soporte1 = new Soporte(req.params.id, 'Soporte1', 'Puebla', '7779006643')
  var modificaciones = req.body;
  soporte1 = { ...soporte1, ...modificaciones }
  res.send(soporte1)
}

function eliminarSoporte(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearSoporte,
  obtenerSoporte,
  modificarSoporte,
  eliminarSoporte
}