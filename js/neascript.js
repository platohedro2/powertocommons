const navbar = document.querySelector('.navbar');
const backToTopButton = document.querySelector('.back-to-top');

// Mostrar o ocultar botón de regreso
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Desplazarse suavemente al hacer clic en un enlace de la barra de navegación
navbar.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-link')) {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    window.scrollTo({
      top: target.offsetTop - navbar.offsetHeight,
      behavior: 'smooth'
    });
  }
});

// Volver arriba al hacer clic en el botón
backToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});