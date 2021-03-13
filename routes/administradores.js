// Estructura del CRUD
const router = require('express').Router();
const {
  crearAdministrador,
  obtenerAdministrador,
  modificaAtributoAdministrador,
  modificaAtributosAdministrador,
  eliminarAdministrador
} = require('../controllers/administrador')

router.get('/', obtenerAdministrador)
router.post('/', crearAdministrador)
router.put('/:id', modificaAtributoAdministrador)
router.put('/', modificaAtributosAdministrador)
// router.delete('/:id', eliminarAdministrador)

module.exports = router;