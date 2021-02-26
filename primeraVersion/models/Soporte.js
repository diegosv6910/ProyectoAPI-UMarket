//soporte.js

//Clase que representa a un usuario soporte.

class Soporte {
    constructor(id, nombre, direccion, telefono, correo, foto) {
        this.id = id; //ID que identifica al soporte;
        this.nombre = nombre; //Nombre del usuario soporte;
        this.direccion = direccion; //Direccion del usuario soporte
        this.telefono = telefono; //Telefono vigente del usuario soporte
        this.correo = correo; //Correo Vigente del usuario soporte
        this.foto = foto; //URL donde esta la foto del soporte;
    }

    //Metodos.
    verPublicaciones() {
        //Metodo que permite visualizar todas las publicaciones activas en UMarket.
    }

    verPerfil() {
        //Metodo que permite visualizar un perfil solicitado.
    }

    responderLlamado() {
        //Metodo que sirve para responder a la solicitud de un usuario
    }

    reportarPublicacion() {
        //Metodo que sirve para reportar una publicacion indebida al administrador
    }

    enviarResponderMensajes() {
        //Metodo que permite enviar o contestar mensaje a un perfil.
    }
}