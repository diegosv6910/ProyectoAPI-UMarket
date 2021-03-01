// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to UMarket api');
});

router.use('/usuarioscv', require('./usuarioscv'));
router.use('/administradores', require('./administradores'));
router.use('/distribuidores', require('./distribuidores'));
router.use('/mensajes', require('./mensajes'));
router.use('/soportes', require('./soportes'));
router.use('/publicaciones', require('./publicaciones'));

// exportamos nuestro nuevo router
module.exports = router;