// Estructura del CRUD
const router = require('express').Router();
const {
  crearDistribuidor,
  obtenerDistribuidor,
  modificarDistribuidor,
  eliminarDistribuidor
} = require('../controllers/distribuidor')

router.get('/', obtenerDistribuidor)
router.post('/', crearDistribuidor)
router.put('/:id', modificarDistribuidor)
router.delete('/:id', eliminarDistribuidor)

module.exports = router;