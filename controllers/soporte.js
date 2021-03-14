var sqlDetails = require('../database')
var mysql = require('mysql')

//CREATE
//Funcion para registrar un Soporte
function crearSoportes(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Creamos query con la consulta
  var sql = "INSERT INTO `bsn7gx0xxd03i3hgfmyr`.`soporte` (`nombreSoporte`, `direccionSoporte`, `telefonoSoporte`, `correoSoporte`, `fotoSoporte`) VALUES ('" + req.body.nombreSoporte + "', '" + req.body.direccionSoporte + "', '" + req.body.telefonoSoporte + "', '" + req.body.correoSoporte + "','" + req.body.urlFoto + "');";
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
//Funcion para obtener todos los Soportees
function obtenerSoportes(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM soporte";
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
//Funcion para obtener 1 Soporte de acuerdo a su ID
function obtenerSimpleSoportes(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM soporte where idSoporte = '"+idBusqueda+"'";
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
//Funcion para obtener solo un campo de un Soporte
function obtenerParametroSoportes(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+" from bsn7gx0xxd03i3hgfmyr.soporte";
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
//Funcion para obtener Soportees que compartan un mismo atributo.
function obtenerAtributoSoportes(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+", COUNT("+parametro+") FROM soporte GROUP BY "+parametro+" HAVING COUNT('"+parametro+"') > 1;"
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
//Funcion para obtener Soporte pero con un limite de muestras
function obtenerLimiteSoporteses(req, res) {
  //Obtengo el ID enviado como Parametro
  limite = req.params.limite;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * from bsn7gx0xxd03i3hgfmyr.soporte limit "+limite+"";
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
//Funcion para actualizar la informacion de un Soporte. (CAMPO UNICO).
//El campo que se modifica es el nombre
function modificaAtributoSoportes(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`soporte` SET `nombreSoporte` = '"+req.body.nombreSoporte+"' WHERE (`idSoporte` = '"+idBusqueda+"');"
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
//Funcion para actualizar la informacion de un Soporte. (TODOS LOS CAMPOS).
//Se modifican todos los campos salvo el ID.
//Recibe un JSON con la informacion a modificar
function modificaAtributosSoportes(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.body.idAdmin;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`soporte` SET `nombreSoporte` = '"+req.body.nombreSoporte+"', `direccionSoporte` = '"+req.body.direccionSoporte+"', `telefonoSoporte` = '"+req.body.telefonoSoporte+"', `correoSoporte` = '"+req.body.correoSoporte+"', `fotoSoporte` = '"+req.body.urlFoto+"' WHERE (`idSoporte` = '"+req.body.idAdmin+"');"
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
//Funcion para eliminar un Soporte
function eliminarSoportes(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "DELETE FROM `bsn7gx0xxd03i3hgfmyr`.`soporte` WHERE (`idSoporte` = '"+idBusqueda+"');";
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
  crearSoportes,
  obtenerSoportes,
  obtenerSimpleSoportes,
  obtenerLimiteSoporteses,
  obtenerParametroSoportes,
  obtenerAtributoSoportes,
  modificaAtributoSoportes,
  modificaAtributosSoportes,
  eliminarSoportes
}