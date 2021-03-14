var sqlDetails = require('../database')
var mysql = require('mysql')

//CREATE
//Funcion para registrar un UsuarioCV
function crearUsuarioCV(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Creamos query con la consulta
  var sql = "INSERT INTO `bsn7gx0xxd03i3hgfmyr`.`usuariocv` (`nombreUsuarioCV`, `direccionUsuarioCV`, `telefonoUsuarioCV`, `correoUsuarioCV`, `credencialUsuarioCV`) VALUES ('" + req.body.nombreUsuarioCV + "', '" + req.body.direccionUsuarioCV + "', '" + req.body.telefonoUsuarioCV + "', '" + req.body.correoUsuarioCV + "','" + req.body.urlFoto + "');";
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
//Funcion para obtener todos los UsuarioCVes
function obtenerUsuarioCV(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM usuariocv";
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
//Funcion para obtener 1 UsuarioCV de acuerdo a su ID
function obtenerSimpleUsuarioCV(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM usuariocv where idUsuarioCV = '"+idBusqueda+"'";
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
//Funcion para obtener solo un campo de un UsuarioCV
function obtenerParametroUsuarioCV(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+" from bsn7gx0xxd03i3hgfmyr.usuariocv";
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
//Funcion para obtener UsuarioCVes que compartan un mismo atributo.
function obtenerAtributoUsuarioCV(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT "+parametro+", COUNT("+parametro+") FROM usuariocv GROUP BY "+parametro+" HAVING COUNT('"+parametro+"') > 1;"
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
//Funcion para obtener UsuarioCV pero con un limite de muestras
function obtenerLimiteUsuarioCVes(req, res) {
  //Obtengo el ID enviado como Parametro
  limite = req.params.limite;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * from bsn7gx0xxd03i3hgfmyr.usuariocv limit "+limite+"";
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
//Funcion para actualizar la informacion de un UsuarioCV. (CAMPO UNICO).
//El campo que se modifica es el nombre
function modificaAtributoUsuarioCV(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`usuariocv` SET `nombreUsuarioCV` = '"+req.body.nombreUsuarioCV+"' WHERE (`idUsuarioCV` = '"+idBusqueda+"');"
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
//Funcion para actualizar la informacion de un UsuarioCV. (TODOS LOS CAMPOS).
//Se modifican todos los campos salvo el ID.
//Recibe un JSON con la informacion a modificar
function modificaAtributosUsuarioCV(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.body.idAdmin;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`usuariocv` SET `nombreUsuarioCV` = '"+req.body.nombreUsuarioCV+"', `direccionUsuarioCV` = '"+req.body.direccionUsuarioCV+"', `telefonoUsuarioCV` = '"+req.body.telefonoUsuarioCV+"', `correoUsuarioCV` = '"+req.body.correoUsuarioCV+"', `credencialUsuarioCV` = '"+req.body.urlFoto+"' WHERE (`idUsuarioCV` = '"+req.body.idAdmin+"');"
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
//Funcion para eliminar un UsuarioCV
function eliminarUsuarioCV(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "DELETE FROM `bsn7gx0xxd03i3hgfmyr`.`usuariocv` WHERE (`idUsuarioCV` = '"+idBusqueda+"');";
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
  crearUsuarioCV,
  obtenerUsuarioCV,
  obtenerSimpleUsuarioCV,
  obtenerLimiteUsuarioCVes,
  obtenerParametroUsuarioCV,
  obtenerAtributoUsuarioCV,
  modificaAtributoUsuarioCV,
  modificaAtributosUsuarioCV,
  eliminarUsuarioCV
}