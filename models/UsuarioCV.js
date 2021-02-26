//UsuarioCV.js

//Clase que representa a un usuario Compra Venta. (Compra y puede vender.)

class UsuarioCV {
    constructor(id, nombre, direccion, telefono, correo, credencial) {
        this.id = id; //ID que identifica al usuario Compra Venta;
        this.nombre = nombre; //Nombre del usuario Compra Ventar;
        this.direccion = direccion; //Direccion del usuario Compra Venta
        this.telefono = telefono; //Telefono vigente del usuario Compra Venta
        this.correo = correo; //Correo Vigente del usuario Compra Venta
        this.credencial = credencial; /*URL donde este alojada la credencial de alumno vigente. En caso
        de ser egresado se pedira una identificacion oficial*/
    }

    //Metodos.
    verPublicaciones() {
        //Metodo que permite visualizar todas las publicaciones activas en UMarket.
    }

    verPerfil() {
        //Metodo que permite visualizar un perfil solicitado.
    }

    publicarArticulo() {
        //Funcion que permite publicar en UMarket un nuevo articulo o servicio.
    }

    comprarArticulo(){
        //Funcion que sirve para definitivamente apartar el producto y acordar la venta con el distribuidor.
    }

    eliminarPublicacion() {
        //Metodo que sirve para eliminar una publicacion solicitada.
    }

    reportarPublicacion() {
        //Metodo que sirve para reportar una publicacion indebida al administrador
    }

    llamarSoporte() {
        //Metodo que permite llamar a soporte para resolver problemas
    }

    enviarResponderMensajes() {
        //Metodo que permite enviar o contestar mensaje a un perfil.
    }
}