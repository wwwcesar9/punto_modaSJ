// const themeToggle = document.getElementById('theme-toggle');
// const themeContainer = document.getElementById('theme-container');

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

/* OPCIONAL */
const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;

// Verificar si hay una preferencia de color en localStorage
const modoOscuroActivado = localStorage.getItem('modoOscuro');

// Aplicar el modo oscuro si está activado
if (modoOscuroActivado) {
    body.classList.add('dark-mode');
    modoOscuroBtn.textContent = 'Cambiar Modo Oscuro';
}

// Manejar el evento click del botón
modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Guardar la preferencia de color en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('modoOscuro', 'activado');
        modoOscuroBtn.textContent = 'Desactivar Modo Oscuro';
    } else {
        localStorage.removeItem('modoOscuro');
        modoOscuroBtn.textContent = 'Activar Modo Oscuro';
    }
});