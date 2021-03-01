/*  Archivo controllers/distribuidor.js
 *  Simulando la respuesta de objetos distribuidor
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const Distribuidor = require('../models/Distribuidor')

function crearDistribuidor(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var distribuidor = new Distribuidor(req.body)
  res.status(201).send(distribuidor)
}

function obtenerDistribuidor(req, res) {
  // Simulando dos usuarios y respondiendolos
  var distribuidor1 = new Distribuidor(1, 'Distr1', 'distri1@gmail.com', '7771306246', 'comprobante1.jpg', 'Papeleria', 'urlfoto1');
  var distribuidor2 = new Distribuidor(1, 'Distr2', 'distri2@gmail.com', '7771000722', 'comprobante2.jpg', 'FotoCopias', 'urlfoto2');
  res.send([distribuidor1, distribuidor2])
}

function modificarDistribuidor(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var distribuidor1 = new Distribuidor(req.params.id, 'distribuidor1', 'distri1@hotmail.com', '7779006643')
  var modificaciones = req.body;
  distribuidor1 = { ...usuario1, ...modificaciones }
  res.send(distribuidor1)
}

function eliminarDistribuidor(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearDistribuidor,
  obtenerDistribuidor,
  modificarDistribuidor,
  eliminarDistribuidor
}