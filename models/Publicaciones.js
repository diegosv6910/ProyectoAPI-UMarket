//Publicaciones.js

//Clase que representa a una publicacion.

class Publicaciones{
    constructor(id, fecha, creador, status){
        this.id = id; //ID de la publicacion
        this.fecha = fecha; //Fecha en la que fue creada la publicacion.
        this.creador = creador; //Usuario responsable de la publicacion;
        this.status = status; //Vigente, Vendido, Eliminada.
    }

    //Metodos
    guardarPublicacion(){
        //Metodo que guarda la publicacion en la base de datos.
    }
}