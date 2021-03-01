/*  Archivo controllers/mensajes.js
 *  Simulando la respuesta de objetos mensajes
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const Mensajes = require('../models/Mensajes')

function crearMensajes(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mensajes = new Mensajes(req.body)
  res.status(201).send(mensajes)
}

function obtenerMensajes(req, res) {
  // Simulando dos usuarios y respondiendolos
  var mensajes1 = new Mensajes(1, '28/02/2021', 'Diego', 'Daniel');
  var mensajes2 = new Mensajes(2, '28/02/2021', 'Daniel', 'Diego');
  res.send([mensajes1, mensajes2])
}

function modificarMensajes(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var mensajes1 = new Mensajes(req.params.id, '28/02/2021', 'Saul')
  var modificaciones = req.body;
  mensajes1 = { ...mensajes1, ...modificaciones }
  res.send(mensajes1)
}

function eliminarMensajes(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearMensajes,
  obtenerMensajes,
  modificarMensajes,
  eliminarMensajes
}