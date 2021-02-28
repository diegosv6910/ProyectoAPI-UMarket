//Administrador.js

//Clase que representa a un usuario Administrador.

class Administrador{
    constructor(id, nombre, direccion, telefono, correo, foto){
        this.id = id; //ID que identifica al administrador;
        this.nombre = nombre; //Nombre del usuario administrador;
        this.direccion = direccion; //Direccion del usuario administrador
        this.telefono = telefono; //Telefono vigente del usuario administrador
        this.correo = correo; //Correo Vigente del usuario administrador
        this.foto = foto; //URL donde esta la foto del administrador;
    }

    //Metodos.
    verPublicaciones(){
        //Metodo que permite visualizar todas las publicaciones activas en UMarket.
    }

    verPerfil(){
        //Metodo que permite visualizar un perfil solicitado.
    }

    responderSolicitudes(){
        //Metodo que sirve para aprobar el registro de un nuevo usuario.
    }

    eliminarPublicacion(){
        //Metodo que sirve para eliminar una publicacion solicitada.
    }

    eliminarPerfil(){
        //Metodo que sirve para eliminar un perfil solicitado.
    }

    enviarMensaje(){
        //Metodo que permite enviar mensaje a un perfil.
    }
}

module.exports = Administrador;