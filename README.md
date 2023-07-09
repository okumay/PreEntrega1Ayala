# Emporio Retro
## Proyecto Final del curso de React.js

Emporio Retro es un e-commerce construido utilizando las siguientes tecnologías:

* React.js
* Vite
* React-Bootstrap
* Firebase

## Funcionalidad

Las funcionalidades que ofrece el sitio son las siguientes:

### Listado de producto
![](src/assets/01-listado-productos.png)
Permite ver un listado de todos los productos disponibles.

### Listado de productos por categoría
![](src/assets/02-listado-productos-categoria.png)
Permite ver un listado de todos los productos dentro de la categoría seleccionada.

### Detalle de producto
![](src/assets/03-detalle-producto.png)
Muestra más información acerca del producto seleccionado, y permite agregar el producto al carrito de compras. Una vez agregado, brinda la opción de ir al carrito o continuar comprando.

### Carrito de compras
![](src/assets/04-carrito-a.png)
Muestra todos los productos dentro del carrito de compras y permite realizar una compra, seguir viendo los productos disponibles, o vaciar el carrito.
Si el usuario selecciona "Realizar compra", se abre un modal en el cual se le solicita la información personal (nombre, teléfono y email).
![](src/assets/04-carrito-b.png)
Una vez ingresados los datos, se le brindará al usuario el ID de la compra, que equivale al ID autogenerado por Firebase al agregar el documento a la colección de órdenes de compra.
![](src/assets/04-carrito-c.png)
![](src/assets/04-firebase.png)

## Demo del sitio
![](src/assets/ProyectoFinalDemo.gif)