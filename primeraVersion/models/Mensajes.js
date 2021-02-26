//Mensajes.js

//Clase que representa a un mensaje.

class Mensajes{
    constructor(id, fecha, remitente, destinatario){
        this.id = id; //ID del mensaje
        this.fecha = fecha; //Fecha en la que se creo el mensaje;
        this.remitente = remitente; //Quien envia el mensaje;
        this.destinatario = destinatario; //Quien recibe el mensaje
    }

    //Metodos
    guardarMensaje(){
        //Metodo que guarda el mensaje en una base de datos.
    }
}