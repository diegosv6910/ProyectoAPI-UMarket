/*  Archivo controllers/publicaciones.js
 *  Simulando la respuesta de objetos publicacion
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const Publicacion = require('../models/Publicaciones')

function crearPublicacion(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var publicacion = new Publicacion(req.body)
  res.status(201).send(publicacion)
}

function obtenerPublicacion(req, res) {
  // Simulando dos usuarios y respondiendolos
  var publicacion1 = new Publicacion(1, '28/02/2021', 'Diego', 'Activa');
  var publicacion2 = new Publicacion(2, '28/02/2021', 'Daniel', 'Terminada');
  res.send([publicacion1, publicacion2])
}

function modificarPublicacion(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var publicacion1 = new Publicacion(req.params.id, '28/02/2021', 'Diego', 'Terminada')
  var modificaciones = req.body;
  publicacion1 = { ...publicacion1, ...modificaciones }
  res.send(publicacion1)
}

function eliminarPublicacion(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearPublicacion,
  obtenerPublicacion,
  modificarPublicacion,
  eliminarPublicacion
}