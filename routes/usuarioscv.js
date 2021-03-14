// Estructura del CRUD
const router = require('express').Router();
//Importando los metodos de controllers
const {
  crearUsuarioCV,
  obtenerUsuarioCV,
  obtenerSimpleUsuarioCV,
  obtenerLimiteUsuarioCVes,
  obtenerParametroUsuarioCV,
  obtenerAtributoUsuarioCV,
  modificaAtributoUsuarioCV,
  modificaAtributosUsuarioCV,
  eliminarUsuarioCV
} = require('../controllers/UsuarioCV')

//Ruta para obtener todos los UsuarioCVes
router.get('/', obtenerUsuarioCV)
//Ruta para obtener un solo UsuarioCV identificado por su ID
router.get('/:id', obtenerSimpleUsuarioCV)
//Ruta para obtener un numero determinado de UsuarioCVes
router.get('/consulta/:limite', obtenerLimiteUsuarioCVes)
//Ruta para obtener un solo campo de los UsuarioCVes
router.get('/parametro/:parametro', obtenerParametroUsuarioCV)
//Ruta para obtener un solo campo de los UsuarioCVes
router.get('/atributo/:parametro', obtenerAtributoUsuarioCV)
//Ruta para crear un UsuarioCV
router.post('/', crearUsuarioCV)
//Ruta para modificar un unico atributo de un UsuarioCV (Identificado por un ID)
router.put('/:id', modificaAtributoUsuarioCV)
//Ruta para modificar todos los atributos de un UsuarioCV. (Identificado por un ID)
router.put('/', modificaAtributosUsuarioCV)
// Ruta para eliminar un UsuarioCV
router.delete('/:id',eliminarUsuarioCV)
module.exports = router;