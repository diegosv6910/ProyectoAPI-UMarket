var sqlDetails = require('../database')
var mysql = require('mysql')

//CREATE
//Funcion para registrar una Mensaje
function crearMensajes(req, res) {
  //Creamos una variable para almacenar la fecha en la que es creada el mensaje
  //Y la convertimos a formato ISO 8601 para almacenarla en MYSQL
  var fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Creamos query con la consulta
  var sql = "INSERT INTO `bsn7gx0xxd03i3hgfmyr`.`mensajes` (`fechaMensaje`, `remitente`, `destinatario`, `texto`) VALUES ('" + fecha + "', '" + req.body.destinatario + "', '" + req.body.remitente + "', '" + req.body.texto + "');";
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}


// return res.status(201).json(user.toAuthJSON())

//READ
//Funcion para obtener todos los Mensajes
function obtenerMensajes(req, res) {
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM mensajes";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener 1 Mensaje de acuerdo a su ID
function obtenerSimpleMensajesUsuario(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM mensajes where remitente = '" + idBusqueda + "'";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener 1 Mensaje de acuerdo a su ID
function obtenerSimpleMensajesDestinatario(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * FROM mensajes where destinatario = '" + idBusqueda + "'";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener solo un campo de un Mensaje
function obtenerParametroMensajes(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT " + parametro + " from bsn7gx0xxd03i3hgfmyr.mensajes";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener Mensajes que compartan un mismo atributo.
function obtenerAtributoMensajes(req, res) {
  //Obtengo el ID enviado como Parametro
  parametro = req.params.parametro;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT " + parametro + ", COUNT(" + parametro + ") FROM mensajes GROUP BY " + parametro + " HAVING COUNT('" + parametro + "') > 1;"
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//READ
//Funcion para obtener Mensaje pero con un limite de muestras
function obtenerLimiteMensajeses(req, res) {
  //Obtengo el ID enviado como Parametro
  limite = req.params.limite;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "SELECT * from bsn7gx0xxd03i3hgfmyr.mensajes limit " + limite + "";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//UPDATE
//Funcion para actualizar la informacion de un Mensaje. (CAMPO UNICO).
//El campo que se modifica es el texto del mensaje
function modificaAtributoMensajes(req, res) {
  //Almacenamos en una variable ID el ID que se envia como parametro.
  var idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "UPDATE `bsn7gx0xxd03i3hgfmyr`.`mensajes` SET `texto` = '" + req.body.texto + "' WHERE (`idMensaje` = '" + idBusqueda + "');"
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

//DELETE
//Funcion para eliminar un Mensaje
function eliminarMensajes(req, res) {
  //Obtengo el ID enviado como Parametro
  idBusqueda = req.params.id;
  //Creamos la variable con que es una conexion a mysql
  con = mysql.createConnection(sqlDetails);
  //Nos conectamos a la base de datos
  con.connect(function (err) {
    //Verificamos que no existan errores
    if (err) throw err;
    //Creamos query con la consulta
    var sql = "DELETE FROM `bsn7gx0xxd03i3hgfmyr`.`mensajes` WHERE (`idMensaje` = '" + idBusqueda + "');";
    //Ejecutamos el query con la conexion creada
    con.query(sql, function (err, result) {
      //Verificamos que no existan errores
      if (err) throw err;
      //Retornamos un JSON con la informacion creada y terminamos la conexion
      return res.json(result), con.end();
    });
  });
}

// exportamos las funciones definidas
module.exports = {
  crearMensajes,
  obtenerMensajes,
  obtenerSimpleMensajesUsuario,
  obtenerSimpleMensajesDestinatario,
  obtenerLimiteMensajeses,
  obtenerParametroMensajes,
  obtenerAtributoMensajes,
  modificaAtributoMensajes,
  eliminarMensajes
}