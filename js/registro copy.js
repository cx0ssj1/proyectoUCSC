document.getElementById('link-registrarse').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('form-inicio-sesion').style.display = 'none';
    document.getElementById('form-registrarse').style.display = 'block';
    document.getElementById('modalFormLabel').textContent = 'Registrarse';
});

document.getElementById('link-iniciar-sesion').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('form-registrarse').style.display = 'none';
    document.getElementById('form-inicio-sesion').style.display = 'block';
    document.getElementById('modalFormLabel').textContent = 'Inicia Sesión';
});

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const btnInicio = document.getElementById('btnInicio');

    if (username === 'carlos' && password === 'admin') {
        // Cambia el texto a "Cerrar sesión"
        btnInicio.textContent = 'Cerrar Sesión';
        btnInicio.dataset.bsToggle = ''; // Deshabilitar el modal para "Cerrar sesión"
        
        // Cambiar la función de click para cerrar sesión
        btnInicio.onclick = function() {
            logoutUser();
        };

        // Cerrar el modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalForm'));
        modal.hide();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
    return false; // Evitar el envío del formulario
}

function logoutUser() {
    const btnInicio = document.getElementById('btnInicio');
    
    // Restablecer el texto a "Iniciar Sesión"
    btnInicio.textContent = 'Iniciar Sesión';
    btnInicio.dataset.bsToggle = 'modal'; // Volver a habilitar el modal para iniciar sesión
    btnInicio.onclick = null; // Restablecer la función de click para abrir el modal
}