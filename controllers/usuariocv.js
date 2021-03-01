/*  Archivo controllers/usuariocv.js
 *  Simulando la respuesta de objetos usuariocv
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuario
const UsuarioCV = require('../models/UsuarioCV')

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuariocv = new UsuarioCV(req.body)
  res.status(201).send(usuariocv)
}

function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuariocv1 = new UsuarioCV(1, 'Diego', 'Morelos', '7771306246', 'correo1@gmail.com', 'urlfoto1');
  var usuariocv2 = new UsuarioCV(1, 'Daniel', 'CDMX', '7774062533', 'correo2@gmail.com', 'urlfoto2');
  res.send([usuariocv1, usuariocv2])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var usuariocv1 = new Usuario(req.params.id, 'Diego', 'Puebla', '7779006643')
  var modificaciones = req.body;
  usuariocv1 = { ...usuario1, ...modificaciones }
  res.send(usuariocv1)
}

function eliminarUsuario(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}