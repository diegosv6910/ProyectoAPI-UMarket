# ProyectoAPI-UMarket
**Temática**: Marketplace destinado para que estudiantes de Universidad puedan vender, intercambiar o prestar material para la escuela. (Libros, herramientas, útiles etc.).

**¿Qué espero que haga el proyecto?** La idea es generar un Marketplace donde estudiantes universitarios de la misma región o zona publiquen sus artículos escolares para venderse, prestarse o cambiarse. Esto se va a lograr a través de publicaciones de artículos donde se especificará el artículo, su precio, sus características y lo que busca obtener. De ahí otra persona que esté interesada en el producto puede empezar una conversación con el vendedor para conseguir el artículo en cuestión.

**¿Qué tipos de usuario tendrá nuestro sistema?:** 4 tipos de usuarios.

1.	Usuario que vende artículos. (Distribuidor) Este usuario es un distribuidor de material escolar. Puede ser una editorial, una papelería, una electrónica, etc. 
2.	Usuario que compra y vende artículos. Este es el usuario común es el que puede comprar y vender artículos dentro del Marketplace. Es un estudiante o egresado.
3.	Administrador que supervisa los artículos. 
4.	Soporte. Este usuario es el encargado de contactar a usuarios distribuidor o compra / venta en caso de tener algún problema durante la aplicación.

**¿Qué acciones puede realizar cada usuario?**

Usuario / Acciones	Navegar entre publicaciones.	Publicar Artículos.	Comprar artículos.	Enviar Mensajes.	Eliminar usuarios y publicaciones.
Distribuidor	SI	SI	NO	SI	NO
Usuario compra/venta.	SI	SI	SI	SI	NO
Administrador.	SI	NO	NO	SI	SI
Soporte	SI	NO	NO	SI	NO.

**¿Qué información se necesita?**

**Para registrarte como vendedor.**

1.	Nombre del distribuidor. (Nombre del negocio, razón social o nombre del encargado de vender los productos).
2.	Dirección de correo electrónico vigente.
3.	Número de teléfono vigente.
4.	Comprobante de domicilio. (Negocio o domicilio del responsable).
5.	Ramo. (Se dedican a la venta Libros, material de papelería, material eléctrico, uniformes, etc.).

**Para registrarte como comprador.**

1.	Nombre completo.
2.	Dirección de correo electrónico vigente.
3.	Número de teléfono vigente.
4.	Comprobante de domicilio.
5.	Credencial escolar vigente con fotografía. En caso de ser egresado o no estudiante solicitaremos una identificación oficial vigente con fotografía.

**¿Cuáles son las principales entidades?**

1.	Distribuidor.
2.	Usuario Compra / Venta.
3.	Publicaciones.
4.	Administradores.
5.	Mensajes.
6.	Soporte.

**¿Qué características tiene cada entidad?**

**1.	Distribuidor.**

1.1.	Tiene permisos para realizar publicaciones de venta.
1.2.	Incluyen un ID para distinguirlos.
1.3.	Tiene su perfil de contacto. (Nombre del negocio, ubicación [Zona y ubicación real del negocio).
1.4.	No tiene permisos para realizar compras.
1.5.	Puede ver publicaciones activas.
1.6.	Es un distribuidor oficial de material escolar.
1.7.	Puede enviar mensajes a usuarios compra / venta.
1.8.	Puede reportar publicaciones indebidas al administrador.

**2.	Usuario Compra / Venta.**

2.1.	Tiene permisos para vender y para comprar.
2.2.	Incluyen un ID para distinguirlos.
2.3.	Tiene su perfil de contacto. (Nombre, ubicación [Zona o universidad donde estudia], correo electrónico y teléfono.
2.4.	Puede ver las publicaciones activas.
2.5.	Realiza ventas con material escolar seminuevo / usado.
2.6.	Puede enviar mensajes a usuarios compra / venta, distribuidores.
2.7.	Puede reportar publicaciones indebidas al administrador.

**3.	Publicaciones. **

3.1.	Son marcadas por un ID que las distingue.
3.2.	Están realizadas tanto por un distribuidor o por un usuario compra / venta.
3.3.	Incluyen una descripción del artículo. (Precio, foto, tiempo de uso, estética, 
3.4.	Tienen fecha de subida.

**4.	Administradores.**
4.1.	No tiene perfil de contacto. (Únicamente se muestra su nombre como Administración UMarket).
4.2.	Es un perfil verificado. (Ningún otro usuario puede llamarse así).
4.3.	Únicamente ven las publicaciones en activo.
4.4.	Puede enviar mensajes a cualquier tipo de usuario.
4.5.	Es el único usuario que puede eliminar publicaciones o usuarios de cualquier tipo.

**5.	Mensajes.**

5.1.	Están identificados por un ID.
5.2.	Sirven como medio de comunicación entre los usuarios del sistema.
5.3.	Únicamente es un canal de comunicación entre dos personas.

**6.	Soporte.**

6.1.	Esta identificado por un ID.
6.2.	No tiene perfil de contacto. (Únicamente se muestra su nombre como Soporte UMarket).
6.3.	Es un perfil verificado. (Ningún otro usuario puede llamarse así).
6.4.	Es el medio de comunicación para que los usuarios puedan resolver sus dudas.

**¿Qué funcionalidades tiene cada entidad?**

**1.	Distribuidor.**

1.1.	Creación de su perfil.
1.2.	Visualizan publicaciones de venta.
1.3.	Creación de publicaciones de venta.
1.4.	Enviar y contestar mensajes.
1.5.	Reportar publicaciones.
1.6.	Contactar a soporte.

**2.	Usuario Compra / Venta.**
2.1.	Creación de su perfil.
2.2.	Visualizan publicaciones de venta.
2.3.	Creación publicaciones de venta.
2.4.	Realizar solicitudes de compra.
2.5.	Enviar y contestar mensajes.
2.6.	Reportar publicaciones.
2.7.	Contactar a soporte.

**3.	Publicaciones.**

3.1.	Son creadas.
3.2.	Son eliminadas.

**4.	Administradores.**

4.1.	envían mensajes.
4.2.	Revisan publicaciones de venta.
4.3.	Revisan perfiles.
4.4.	Eliminan publicaciones.
4.5.	Eliminan usuarios.
4.6.	Aprueban registros de usuarios.

**5.	Mensajes.**

5.1.	Se crean.

**6.	Soporte.**

6.1.	envían mensajes.
6.2.	Revisan publicaciones de venta.
6.3.	Revisan perfiles.
6.4.	Alertan a administradores de uso indebido.

**Historias de usuario.**

**Usuarios compra / venta.**

Como usuario compra / venta de UMarket quiero poder ver todas las publicaciones de venta activas para ver si hay algo de mi interés.

Como usuario compra / venta de UMarket quiero poder realizar publicaciones de venta para poder vender o cambiar mis artículos que ya no uso.

Como usuario compra / venta de UMarket quiero poder enviar mensajes a los demás usuarios para poder obtener más información tanto del producto como de ellos.

Como usuario compra / venta de UMarket quiero poder reportar publicaciones para poder eliminar aquellas que no respeten las reglas de uso.

Como usuario compra / venta de UMarket quiero poder enviar mensaje a soporte para solucionar algunos problemas durante la navegación.

**Usuario Distribuidor.**

Como usuario distribuidor de UMarket quiero poder ver publicaciones activas para poder ver si alguien busca algo que yo vendo.

Como usuario distribuidor de UMarket quiero poder publicar sobre mis artículos o servicios para ver si son de interés de alguien.

Como usuario distribuidor de UMarket quiero poder responder mensajes de mis posibles clientes para aclarar dudas y si es posible realizar la venta.

Como usuario distribuidor de UMarket quiero poder reportar publicaciones o usuarios para eliminar aquellas que no respeten las reglas de uso.

Como usuario distribuidor de UMarket quiero poder contactar a soporte si tengo problemas durante la navegación.

**Administrador.**

Como usuario administrador de UMarket quiero poder ver los registros pendientes por aprobar para poder dar de alta usuarios.

Como usuario administrador de UMarket quiero poder ver todas las publicaciones activas para ver si todas cumplen con las normas.

Como usuario administrador de UMarket quiero poder ver todos los perfiles para asegurarme que cumplan con las reglas.

Como usuario administrador de UMarket quiero poder enviar mensajes a usuarios para poder advertirles sobre algún uso indebido de la plataforma.

Como usuario administrador de UMarket quiero poder eliminar publicaciones para eliminar aquellas que no cumplan las reglas.

Como usuario administrador de UMarket quiero poder eliminar usuarios que no cumplan las reglas.

**Soporte.**

Como usuario de Soporte de UMarket quiero poder ver todas las publicaciones activas.

Como usuario de Soporte de UMarket quiero poder enviar y responder mensajes de usuarios que presenten problemas para resolverlos.

Como usuario de Soporte de UMarket quiero poder visualizar todos los perfiles de usuarios para verificar que no haya problemas.


