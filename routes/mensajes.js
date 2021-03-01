// Estructura del CRUD
const router = require('express').Router();
const {
  crearMensajes,
  obtenerMensajes,
  modificarMensajes,
  eliminarMensajes
} = require('../controllers/mensaje')

router.get('/', obtenerMensajes)
router.post('/', crearMensajes)
router.put('/:id', modificarMensajes)
router.delete('/:id', eliminarMensajes)

module.exports = router;