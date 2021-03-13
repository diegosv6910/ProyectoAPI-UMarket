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

//Configuracion de MYSQL
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bsn7gx0xxd03i3hgfmyr-mysql.services.clever-cloud.com',
  user     : 'uder301entdayusn',
  password : 'Stw9whGXWwOuzl6ikh41',
  database : 'bsn7gx0xxd03i3hgfmyr'
});

//Verificando Conexion
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

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