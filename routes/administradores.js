// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const{
  crearAdministrador,
  obtenerAdministrador,
  obtenerSimpleAdministrador,
  obtenerLimiteAdministradores,
  obtenerParametroAdministrador,
  obtenerAtributoAdministrador,
  modificaAtributoAdministrador,
  modificaAtributosAdministrador,
  eliminarAdministrador
} = require('../controllers/administrador')

//Obtengo los metodos de publicaciones para ocuparlos desde ruta administrador.
const{
  obtenerLimitePublicacioneses,
  obtenerParametroPublicaciones,
  eliminarPublicaciones
} = require('../controllers/publicacion');

//Obtengo los metodos de UsuarioCV para ocuparlos desde ruta administrador.
const{
  obtenerLimiteUsuarioCVes,
  eliminarUsuarioCV
} = require('../controllers/usuariocv')

//Obtengo los metodos de Distribuidores para ocuparlos desde ruta administrador.
const{
  obtenerLimiteDistribuidores,
  eliminarDistribuidor
} = require('../controllers/distribuidor')

//Ruta para obtener todos los administradores
router.get('/', obtenerAdministrador)
//Ruta para obtener un solo administrador identificado por su ID
router.get('/:id', obtenerSimpleAdministrador)
//Ruta para obtener un numero determinado de administradores
router.get('/consulta/:limite', obtenerLimiteAdministradores)
//Ruta para obtener un solo campo de los administradores
router.get('/parametro/:parametro', obtenerParametroAdministrador)
//Ruta para obtener un solo campo de los administradores
router.get('/atributo/:parametro', obtenerAtributoAdministrador)
//Ruta para crear un Administrador
router.post('/', crearAdministrador)
//Ruta para modificar un unico atributo de un administrador (Identificado por un ID)
router.put('/:id', modificaAtributoAdministrador)
//Ruta para modificar todos los atributos de un administrador. (Identificado por un ID)
router.put('/', modificaAtributosAdministrador)
// Ruta para eliminar un administrador
router.delete('/:id',eliminarAdministrador)
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
module.exports = router;