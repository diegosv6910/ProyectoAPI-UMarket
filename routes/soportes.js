// Estructura del CRUD
const router = require('express').Router();
const {
    crearSoporte,
    obtenerSoporte,
    modificarSoporte,
    eliminarSoporte
} = require('../controllers/soporte')

router.get('/', obtenerSoporte)
router.post('/', crearSoporte)
router.put('/:id', modificarSoporte)
router.delete('/:id', eliminarSoporte)

module.exports = router;