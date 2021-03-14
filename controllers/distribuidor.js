// /*  Archivo controllers/distribuidor.js
//  *  Simulando la respuesta de objetos distribuidor
//  *  en un futuro aquí se utilizarán los modelos
//  */

// // importamos el modelo de usuario
// const Distribuidor = require('../models/Distribuidor')

// function crearDistribuidor(req, res) {
//   // Instanciaremos un nuevo usuario utilizando la clase usuario
//   var distribuidor = new Distribuidor(req.body)
//   res.status(201).send(distribuidor)
// }

// function obtenerDistribuidor(req, res) {
//   // Simulando dos usuarios y respondiendolos
//   var distribuidor1 = new Distribuidor(1, 'Distr1', 'distri1@gmail.com', '7771306246', 'comprobante1.jpg', 'Papeleria', 'urlfoto1');
//   var distribuidor2 = new Distribuidor(1, 'Distr2', 'distri2@gmail.com', '7771000722', 'comprobante2.jpg', 'FotoCopias', 'urlfoto2');
//   res.send([distribuidor1, distribuidor2])
// }

// function modificarDistribuidor(req, res) {
//   // simulando un usuario previamente existente que el cliente modifica
//   var distribuidor1 = new Distribuidor(req.params.id, 'distribuidor1', 'distri1@hotmail.com', '7779006643')
//   var modificaciones = req.body;
//   distribuidor1 = { ...distribuidor1, ...modificaciones }
//   res.send(distribuidor1)
// }

// function eliminarDistribuidor(req, res) {
//   // se simula una eliminación de usuario, regresando un 200
//   res.status(200).send(`Usuario ${req.params.id} eliminado`);
// }

// // exportamos las funciones definidas
// module.exports = {
//   crearDistribuidor,
//   obtenerDistribuidor,
//   modificarDistribuidor,
//   eliminarDistribuidor
// }

var sqlDetails = require('../database')
var mysql = require('mysql')

//CREATE
//Funcion para registrar un Distribuidor
function crearDistribuidor(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Creamos query con la consulta
  var sql = "INSERT INTO `bsn7gx0xxd03i3hgfmyr`.`distribuidor` (`nombreDistribuidor`, `domicilioDistribuidor`, `telefonoDistribuidor`, `correoDistribuidor`, `identificacionDistribuidor`, `ramo`) VALUES ('" + req.body.nombreDistribuidor + "', '" + req.body.direccionDistribuidor + "', '" + req.body.telefonoDistribuidor + "', '" + req.body.correoDistribuidor + "','" + req.body.urlFoto + "', '"+ req.body.ramo +"');";
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if(err) throw err;
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

// return res.status(201).json(user.toAuthJSON())

//READ
//Funcion para obtener todos los Distribuidores
function obtenerDistribuidor(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM distribuidor";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener 1 Distribuidor de acuerdo a su ID
function obtenerSimpleDistribuidor(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM distribuidor where idDistribuidor = '"+idBusqueda+"'";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener solo un campo de un Distribuidor
function obtenerParametroDistribuidor(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  console.log(parametro)
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+" from bsn7gx0xxd03i3hgfmyr.distribuidor";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener Distribuidores que compartan un mismo atributo.
function obtenerAtributoDistribuidor(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  console.log(parametro)
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+", COUNT("+parametro+") FROM distribuidor GROUP BY "+parametro+" HAVING COUNT('"+parametro+"') > 1;"
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener Distribuidor pero con un limite de muestras
function obtenerLimiteDistribuidores(req, res) {
  //Obtengo el ID enviado como Parametro
  limite = req.params.limite;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * from bsn7gx0xxd03i3hgfmyr.distribuidor limit "+limite+"";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//UPDATE
//Funcion para actualizar la informacion de un Distribuidor. (CAMPO UNICO).
//El campo que se modifica es el nombre
function modificaAtributoDistribuidor(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`distribuidor` SET `nombreDistribuidor` = '"+req.body.nombreDistribuidor+"' WHERE (`idDistribuidor` = '"+idBusqueda+"');"
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//UPDATE
//Funcion para actualizar la informacion de un Distribuidor. (TODOS LOS CAMPOS).
//Se modifican todos los campos salvo el ID.
//Recibe un JSON con la informacion a modificar
function modificaAtributosDistribuidor(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.body.idAdmin;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`distribuidor` SET `nombreDistribuidor` = '"+req.body.nombreDistribuidor+"', `domicilioDistribuidor` = '"+req.body.direccionDistribuidor+"', `telefonoDistribuidor` = '"+req.body.telefonoDistribuidor+"', `correoDistribuidor` = '"+req.body.correoDistribuidor+"', `identificacionDistribuidor` = '"+req.body.urlFoto+"', `ramo` = '"+req.body.ramo+"' WHERE (`idDistribuidor` = '"+req.body.idAdmin+"');"
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//DELETE
//Funcion para eliminar un Distribuidor
function eliminarDistribuidor(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "DELETE FROM `bsn7gx0xxd03i3hgfmyr`.`distribuidor` WHERE (`idDistribuidor` = '"+idBusqueda+"');";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if(err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

// exportamos las funciones definidas
module.exports = {
  crearDistribuidor,
  obtenerDistribuidor,
  obtenerSimpleDistribuidor,
  obtenerLimiteDistribuidores,
  obtenerParametroDistribuidor,
  obtenerAtributoDistribuidor,
  modificaAtributoDistribuidor,
  modificaAtributosDistribuidor,
  eliminarDistribuidor
}