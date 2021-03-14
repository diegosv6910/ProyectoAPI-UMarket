// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const {
  crearDistribuidor,
  obtenerDistribuidor,
  obtenerSimpleDistribuidor,
  obtenerLimiteDistribuidores,
  obtenerParametroDistribuidor,
  obtenerAtributoDistribuidor,
  modificaAtributoDistribuidor,
  modificaAtributosDistribuidor,
  eliminarDistribuidor
} = require('../controllers/Distribuidor')

//Obtengo los metodos de Publicaciones para usarlos como Usuario
const {
  crearPublicacionesDistribuidor,
  eliminarPublicaciones,
  obtenerLimitePublicacioneses
} = require('../controllers/publicacion')

const {
  crearMensajes,
  obtenerSimpleMensajesDestinatario
} = require('../controllers/mensaje')

//Ruta para obtener todos los Distribuidores
router.get('/', obtenerDistribuidor)
//Ruta para obtener un solo Distribuidor identificado por su ID
router.get('/:id', obtenerSimpleDistribuidor)
//Ruta para obtener un numero determinado de Distribuidores
router.get('/consulta/:limite', obtenerLimiteDistribuidores)
//Ruta para obtener un solo campo de los Distribuidores
router.get('/parametro/:parametro', obtenerParametroDistribuidor)
//Ruta para obtener un solo campo de los Distribuidores
router.get('/atributo/:parametro', obtenerAtributoDistribuidor)
//Ruta para crear un Distribuidor
router.post('/', crearDistribuidor)
//Ruta para modificar un unico atributo de un Distribuidor (Identificado por un ID)
router.put('/:id', modificaAtributoDistribuidor)
//Ruta para modificar todos los atributos de un Distribuidor. (Identificado por un ID)
router.put('/', modificaAtributosDistribuidor)
// Ruta para eliminar un Distribuidor
router.delete('/:id',eliminarDistribuidor)
router.post('/crearPublicacion',crearPublicacionesDistribuidor)
//Ruta para ver publicaciones Las delimitamos por un limite para que sea mas rapido su vista.
router.get('/publicaciones/:limite', obtenerLimitePublicacioneses)
//Ruta para enviar un mensaje a un distribuidor.
router.post('/enviarMensaje', crearMensajes);
//Ruta para ver mensajes enviados a un distribuidor.
router.get('/verMensajes/:id', obtenerSimpleMensajesDestinatario);
//Ruta para ver eiminar una publicacion realizada por un distribuidor.
router.delete('/eliminarPublicacion/:id', eliminarPublicaciones);
module.exports = router;