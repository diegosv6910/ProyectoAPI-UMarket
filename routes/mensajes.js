// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const {
  obtenerMensajes,
  obtenerSimpleMensajes,
  obtenerLimiteMensajeses,
  obtenerParametroMensajes,
  obtenerAtributoMensajes,
  modificaAtributoMensajes,
  eliminarMensajes,
  crearMensajes,
} = require('../controllers/mensaje')

//Ruta para obtener todos los Mensajeses
router.get('/', obtenerMensajes)
//Ruta para crear Un Mensaje
router.post('/', crearMensajes)
//Ruta para obtener un solo Mensajes identificado por su ID
router.get('/:id', obtenerSimpleMensajes)
//Ruta para obtener un numero determinado de Mensajeses
router.get('/consulta/:limite', obtenerLimiteMensajeses)
//Ruta para obtener un solo campo de los Mensajeses
router.get('/parametro/:parametro', obtenerParametroMensajes)
//Ruta para obtener un solo campo de los Mensajeses
router.get('/atributo/:parametro', obtenerAtributoMensajes)
//Ruta para modificar el unico atributo modificable de un Mensajes (STATUS) (Identificado por un ID)
router.put('/:id', modificaAtributoMensajes)
// Ruta para eliminar un Mensajes
router.delete('/:id',eliminarMensajes)
module.exports = router;