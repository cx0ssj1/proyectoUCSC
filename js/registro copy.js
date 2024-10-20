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