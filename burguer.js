 // Lógica para la barra de scroll
        const stickyNav = document.getElementById('sticky-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 90) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        });
// --- Selectores de elementos ---
// Seleccionamos TODOS los botones que tengan la clase "hamburger-btn"
const burgerButtons = document.querySelectorAll('.hamburger-btn'); 
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
// const mainContent = document.querySelector('main'); // Si usas el efecto de empujar contenido

// --- Funciones para abrir y cerrar ---
function openMenu() {
  sideMenu.classList.add('open');
  overlay.classList.add('open');
  // mainContent.classList.add('contenido-desplazado'); // Si usas el efecto de empujar
}

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
  // mainContent.classList.remove('contenido-desplazado'); // Si usas el efecto de empujar
}

// --- Asignación de eventos ---

// Recorremos cada botón encontrado y le asignamos el evento "click"
burgerButtons.forEach(button => {
  button.addEventListener('click', openMenu);
});

// Los eventos para cerrar el menú se mantienen igual
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Cierra si clicas fuera (asegúrate de que esta lógica no interfiera, 
// puedes quitar e.target !== burger ya que ahora son varios botones)
document.addEventListener('click', (e) => {
  // Comprobamos si el clic fue en un botón de hamburguesa
  const isBurgerButton = e.target.closest('.hamburger-btn');

  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && !isBurgerButton) {
    closeMenu();
  }
});