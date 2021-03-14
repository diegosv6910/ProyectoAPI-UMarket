// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const {
  obtenerPublicaciones,
  obtenerSimplePublicaciones,
  obtenerLimitePublicacioneses,
  obtenerParametroPublicaciones,
  obtenerAtributoPublicaciones,
  modificaAtributoPublicaciones,
  eliminarPublicaciones,
  crearPublicacionesDistribuidor,
  crearPublicacionesUsuario
} = require('../controllers/publicacion')

//Ruta para obtener todos los Publicacioneses
router.get('/', obtenerPublicaciones)
//Ruta para obtener un solo Publicaciones identificado por su ID
router.get('/:id', obtenerSimplePublicaciones)
//Ruta para obtener un numero determinado de Publicacioneses
router.get('/consulta/:limite', obtenerLimitePublicacioneses)
//Ruta para obtener un solo campo de los Publicacioneses
router.get('/parametro/:parametro', obtenerParametroPublicaciones)
//Ruta para obtener un solo campo de los Publicacioneses
router.get('/atributo/:parametro', obtenerAtributoPublicaciones)
//Ruta para crear un Publicaciones como Usuario
router.post('/usuario', crearPublicacionesUsuario)
//Ruta para crear un Publicaciones como Distribuidor
router.post('/distribuidor', crearPublicacionesDistribuidor)
//Ruta para modificar el unico atributo modificable de un Publicaciones (STATUS) (Identificado por un ID)
router.put('/:id', modificaAtributoPublicaciones)
// Ruta para eliminar un Publicaciones
router.delete('/:id',eliminarPublicaciones)
module.exports = router;