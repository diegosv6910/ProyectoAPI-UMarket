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

const{
  obtenerLimitePublicacioneses,
  obtenerParametroPublicaciones,
  eliminarPublicaciones
} = require('../controllers/publicacion');

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
//Ruta para ver publicaciones Las delimitamos por un limite para que sea mas rapido su vista.
router.get('/publicaciones/:limite', obtenerLimitePublicacioneses)
//Ruta para ver publicaciones Checamos solo un parametro
router.get('/publicacionesParametro/:parametro', obtenerParametroPublicaciones)
module.exports = router;