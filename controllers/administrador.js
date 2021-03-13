const Administrador = require('../models/Administrador')
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

// exportamos las funciones definidas
module.exports = {
  crearAdministrador,
  obtenerAdministrador,
  modificaAtributoAdministrador,
  modificaAtributosAdministrador,
  // eliminarAdministrador
}