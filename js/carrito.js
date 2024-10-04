let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio) {
    // Verificar si el producto ya está en el carrito
    let productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en localStorage
    actualizarCarrito();
}

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

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios en localStorage
    actualizarCarrito();
}

function cambiarCantidad(indice, nuevaCantidad) {
    if (nuevaCantidad < 1) {
        alert("La cantidad debe ser al menos 1");
        return;
    }
    
    carrito[indice].cantidad = parseInt(nuevaCantidad);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito en localStorage
    actualizarCarrito();
}

// Cargar carrito al cargar la página
document.addEventListener('DOMContentLoaded', actualizarCarrito);

