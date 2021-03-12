// //Administrador.js

// //Clase que representa a un usuario Administrador.

// class Administrador{
//     constructor(id, nombre, direccion, telefono, correo, foto){
//         this.id = id; //ID que identifica al administrador;
//         this.nombre = nombre; //Nombre del usuario administrador;
//         this.direccion = direccion; //Direccion del usuario administrador
//         this.telefono = telefono; //Telefono vigente del usuario administrador
//         this.correo = correo; //Correo Vigente del usuario administrador
//         this.foto = foto; //URL donde esta la foto del administrador;
//     }

//     //Metodos.
//     verPublicaciones(){
//         //Metodo que permite visualizar todas las publicaciones activas en UMarket.
//     }

//     verPerfil(){
//         //Metodo que permite visualizar un perfil solicitado.
//     }

//     responderSolicitudes(){
//         //Metodo que sirve para aprobar el registro de un nuevo usuario.
//     }

//     eliminarPublicacion(){
//         //Metodo que sirve para eliminar una publicacion solicitada.
//     }

//     eliminarPerfil(){
//         //Metodo que sirve para eliminar un perfil solicitado.
//     }

//     enviarMensaje(){
//         //Metodo que permite enviar mensaje a un perfil.
//     }
// }

// module.exports = Administrador;

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creamos el modelo para usuario
const Administrador = sequelize.define('Administrador', {
    idAdministrador: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  nombreAdministrador: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  direccionAdministrador: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  telefonoAdministrador: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  correoAdministrador: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  urlFoto: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'administrador'});

// exportamos el modelo.
module.exports = Administrador;