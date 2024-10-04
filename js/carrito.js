let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalCarrito = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    let productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }
    
    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el carrito visual y el contador
    actualizarCarrito();
    actualizarContadorCarrito();
}

// Función para actualizar la tabla del carrito
function actualizarCarrito() {
    const tablaCarrito = document.getElementById('tabla-carrito').getElementsByTagName('tbody')[0];
    tablaCarrito.innerHTML = ''; // Limpiar tabla
    
    totalCarrito = 0;
    carrito.forEach((producto, index) => {
        const row = tablaCarrito.insertRow();
        row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td><input type="number" min="1" value="${producto.cantidad}" class="form-control" onchange="cambiarCantidad(${index}, this.value)"></td>
        <td>$${producto.precio * producto.cantidad}</td>
        <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        
        totalCarrito += producto.precio * producto.cantidad;
    });
    
    document.getElementById('total-carrito').innerText = `$${totalCarrito}`;
}

// Función para eliminar un producto
function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios en localStorage
    actualizarCarrito();
    actualizarContadorCarrito(); // Actualizar el contador después de eliminar
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(indice, nuevaCantidad) {
    if (nuevaCantidad < 1) {
        alert("La cantidad debe ser al menos 1");
        return;
    }
    
    carrito[indice].cantidad = parseInt(nuevaCantidad);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito en localStorage
    actualizarCarrito();
    actualizarContadorCarrito(); // Actualizar el contador después de cambiar la cantidad
}

// Función para actualizar el contador del carrito en el badge
function actualizarContadorCarrito() {
    // Calcular la cantidad total de productos en el carrito
    let totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    
    // Actualizar el número en el badge del carrito
    document.getElementById('contador-carrito').innerText = totalProductos;
}


// Al cargar la página, actualizar el carrito y el contador
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
    actualizarContadorCarrito();  // Actualizar el contador al cargar la página
});
