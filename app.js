// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');


// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// **************** COnfiguración de MySQL ********************

const Sequelize = require('sequelize')

const sequelize = new Sequelize('bsn7gx0xxd03i3hgfmyr', 'uder301entdayusn', 'Stw9whGXWwOuzl6ikh41', {
	host: 'bsn7gx0xxd03i3hgfmyr-mysql.services.clever-cloud.com',
	dialect: 'mysql',
})

// Verificamos que la conexion funcione
sequelize.authenticate()
.then(() => {
	console.log("It's Alive!!!")
})
.catch(err => {
	console.log('No se conecto')
})



// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});