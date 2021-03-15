// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const {
  crearSoportes,
  obtenerSoportes,
  obtenerSimpleSoportes,
  obtenerLimiteSoporteses,
  obtenerParametroSoportes,
  obtenerAtributoSoportes,
  modificaAtributoSoportes,
  modificaAtributosSoportes,
  eliminarSoportes
} = require('../controllers/soporte')

//Obtengo los metodos de publicaciones para ocuparlos desde ruta soporte.
const{
  obtenerLimitePublicacioneses,
  obtenerParametroPublicaciones,
  eliminarPublicaciones
} = require('../controllers/publicacion');

//Obtengo los metodos de UsuarioCV para ocuparlos desde ruta soporte.
const{
  obtenerLimiteUsuarioCVes,
  eliminarUsuarioCV,
  modificaAtributosUsuarioCV
} = require('../controllers/usuariocv')

//Obtengo los metodos de Distribuidores para ocuparlos desde ruta soporte.
const{
  obtenerLimiteDistribuidores,
  eliminarDistribuidor,
  modificaAtributosDistribuidor
} = require('../controllers/distribuidor')

//Ruta para obtener todos los Soporteses
router.get('/', obtenerSoportes)
//Ruta para obtener un solo Soportes identificado por su ID
router.get('/:id', obtenerSimpleSoportes)
//Ruta para obtener un numero determinado de Soporteses
router.get('/consulta/:limite', obtenerLimiteSoporteses)
//Ruta para obtener un solo campo de los Soporteses
router.get('/parametro/:parametro', obtenerParametroSoportes)
//Ruta para obtener un solo campo de los Soporteses
router.get('/atributo/:parametro', obtenerAtributoSoportes)
//Ruta para crear un Soportes
router.post('/', crearSoportes)
//Ruta para modificar un unico atributo de un Soportes (Identificado por un ID)
router.put('/:id', modificaAtributoSoportes)
//Ruta para modificar todos los atributos de un Soportes. (Identificado por un ID)
router.put('/', modificaAtributosSoportes)
// Ruta para eliminar un Soportes
router.delete('/:id',eliminarSoportes)
// Ruta para eliminar una publicacion
router.delete('/publicacion/:id',eliminarPublicaciones)
// Ruta para eliminar un usuarioCV
router.delete('/usuarioCV/:id',eliminarUsuarioCV)
// Ruta para eliminar un Distribuidor
router.delete('/distribuidor/:id',eliminarDistribuidor)
//Ruta para ver publicaciones Las delimitamos por un limite para que sea mas rapido su vista.
router.get('/publicaciones/:limite', obtenerLimitePublicacioneses)
//Ruta para ver UsuariosCV
router.get('/usuariocv/:limite', obtenerLimiteUsuarioCVes);
//Ruta para ver distribuidores
router.get('/distribuidores/:limite', obtenerLimiteDistribuidores);
//Ruta para ver publicaciones Checamos solo un parametro
router.get('/publicacionesParametro/:parametro', obtenerParametroPublicaciones)
//Ruta para modificar todos los atributos de un UsuarioCV. (Identificado por un ID)
router.put('/usuariocv', modificaAtributosUsuarioCV)
//Ruta para modificar todos los atributos de un UsuarioCV. (Identificado por un ID)
router.put('/distribuidor', modificaAtributosDistribuidor)
module.exports = router;