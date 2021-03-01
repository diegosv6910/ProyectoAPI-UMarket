// Estructura del CRUD
const router = require('express').Router();
const {
  crearPublicacion,
  obtenerPublicacion,
  modificarPublicacion,
  eliminarPublicacion
} = require('../controllers/publicacion')

router.get('/', obtenerPublicacion)
router.post('/', crearPublicacion)
router.put('/:id', modificarPublicacion)
router.delete('/:id', eliminarPublicacion)

module.exports = router;