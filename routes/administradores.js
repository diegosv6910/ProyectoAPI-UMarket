// Estructura del CRUD
const router = require('express').Router();
const {
  crearAdministrador,
  obtenerAdministrador,
  modificarAdministrador,
  eliminarAdministrador
} = require('../controllers/administrador')

router.get('/', obtenerAdministrador)
router.post('/', crearAdministrador)
// router.put('/:id', modificarAdministrador)
// router.delete('/:id', eliminarAdministrador)

module.exports = router;