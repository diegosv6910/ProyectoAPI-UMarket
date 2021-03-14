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
//Funcion para registrar un administrador
function crearAdministrador(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Creamos query con la consulta
  var sql = "INSERT INTO `bsn7gx0xxd03i3hgfmyr`.`administrador` (`nombreAdministrador`, `direccionAdministrador`, `telefonoAdministrador`, `correoAdministrador`, `urlFoto`) VALUES ('" + req.body.nombreAdministrador + "', '" + req.body.direccionAdministrador + "', '" + req.body.telefonoAdministrador + "', '" + req.body.correoAdministrador + "','" + req.body.urlFoto + "');";
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
//Funcion para obtener todos los administradores
function obtenerAdministrador(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM administrador";
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
//Funcion para obtener 1 Administrador de acuerdo a su ID
function obtenerSimpleAdministrador(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM administrador where idAdministrador = '"+idBusqueda+"'";
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
//Funcion para obtener solo un campo de un administrador
function obtenerParametroAdministrador(req, res) {
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
    var sql = "SELECT "+parametro+" from bsn7gx0xxd03i3hgfmyr.administrador";
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
//Funcion para obtener Administradores que compartan un mismo atributo.
function obtenerAtributoAdministrador(req, res) {
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
    var sql = "SELECT "+parametro+", COUNT("+parametro+") FROM administrador GROUP BY "+parametro+" HAVING COUNT('"+parametro+"') > 1;"
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
//Funcion para obtener administrador pero con un limite de muestras
function obtenerLimiteAdministradores(req, res) {
  //Obtengo el ID enviado como Parametro
  limite = req.params.limite;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * from bsn7gx0xxd03i3hgfmyr.administrador limit "+limite+"";
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
//Funcion para actualizar la informacion de un administrador. (CAMPO UNICO).
//El campo que se modifica es el nombre
function modificaAtributoAdministrador(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`administrador` SET `nombreAdministrador` = '"+req.body.nombreAdministrador+"' WHERE (`idAdministrador` = '"+idBusqueda+"');"
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
//Funcion para actualizar la informacion de un administrador. (TODOS LOS CAMPOS).
//Se modifican todos los campos salvo el ID.
//Recibe un JSON con la informacion a modificar
function modificaAtributosAdministrador(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.body.idAdmin;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`administrador` SET `nombreAdministrador` = '"+req.body.nombreAdministrador+"', `direccionAdministrador` = '"+req.body.direccionAdministrador+"', `telefonoAdministrador` = '"+req.body.telefonoAdministrador+"', `correoAdministrador` = '"+req.body.correoAdministrador+"', `urlFoto` = '"+req.body.urlFoto+"' WHERE (`idAdministrador` = '"+req.body.idAdmin+"');"
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
//Funcion para eliminar un administrador
function eliminarAdministrador(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "DELETE FROM `bsn7gx0xxd03i3hgfmyr`.`administrador` WHERE (`idAdministrador` = '"+idBusqueda+"');";
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
  crearAdministrador,
  obtenerAdministrador,
  obtenerSimpleAdministrador,
  obtenerLimiteAdministradores,
  obtenerParametroAdministrador,
  obtenerAtributoAdministrador,
  modificaAtributoAdministrador,
  modificaAtributosAdministrador,
  eliminarAdministrador
}