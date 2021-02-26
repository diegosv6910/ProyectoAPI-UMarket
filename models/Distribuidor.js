//Distribuidor.js

//Clase que representa a un usuario Distribuidor.

class Distribuidor {
    constructor(id, nombre, correo, telefono, comprobanteDomicilio, ramo, identificacion) {
        this.id = id; //ID que identifica al distribuidor;
        this.nombre = nombre; //Nombre del usuario distribuidor;
        this.direccion = comprobanteDomicilio; //Direccion del usuario distribuidor
        this.telefono = telefono; //Telefono vigente del usuario distribuidor
        this.correo = correo; //Correo Vigente del usuario distribuidor
        this.ramo = ramo; //Que servicios o productos vende.
        this.identificacion = identificacion; //Identificacion del titular del negocio.
    }

    //Metodos.
    verPublicaciones() {
        //Metodo que permite visualizar todas las publicaciones activas en UMarket.
    }

    verPerfil() {
        //Metodo que permite visualizar un perfil solicitado.
    }

    publicarArticulo(){
        //Funcion que permite publicar en UMarket un nuevo articulo o servicio.
    }

    eliminarPublicacion() {
        //Metodo que sirve para eliminar una publicacion solicitada.
    }

    reportarPublicacion(){
        //Metodo que sirve para reportar una publicacion indebida al distribuidor
    }

    llamarSoporte(){
        //Metodo que permite llamar a soporte para resolver problemas
    }

    enviarResponderMensajes() {
        //Metodo que permite enviar o contestar mensaje a un perfil.
    }
}