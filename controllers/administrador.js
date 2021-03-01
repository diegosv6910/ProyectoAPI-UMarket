/*  Archivo controllers/administrador.js
 *  Simulando la respuesta de objetos administrador
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const Administrador = require('../models/Administrador')

function crearAdministrador(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var administrador = new Administrador(req.body)
  res.status(201).send(administrador)
}

function obtenerAdministrador(req, res) {
  // Simulando dos usuarios y respondiendolos
  var administrador1 = new Administrador(1, 'Admin1', 'Morelos', '7771306246', 'correo1@gmail.com', 'urlfoto1');
  var administrador2 = new Administrador(1, 'Admin2', 'CDMX', '7774062533', 'correo2@gmail.com', 'urlfoto2');
  res.send([administrador1, administrador2])
}

function modificarAdministrador(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var administrador1 = new Administrador(req.params.id, 'Administrador1', 'Puebla', '7779006643')
  var modificaciones = req.body;
  administrador1 = { ...usuario1, ...modificaciones }
  res.send(administrador1)
}

function eliminarAdministrador(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearAdministrador,
  obtenerAdministrador,
  modificarAdministrador,
  eliminarAdministrador
}