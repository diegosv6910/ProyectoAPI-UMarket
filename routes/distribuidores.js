// Estructura del CRUD
const router = require('express').Router();
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
module.exports = router;