// Estructura del CRUD
const router = require('express').Router();
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
module.exports = router;