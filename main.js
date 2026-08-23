// Mini Mercado La Cosecha — interacciones

document.addEventListener('DOMContentLoaded', function () {

  /* Header con sombra al hacer scroll */
  const encabezado = document.querySelector('.encabezado');
  const alternarSombraHeader = () => {
    if (window.scrollY > 12) {
      encabezado.classList.add('con-sombra');
    } else {
      encabezado.classList.remove('con-sombra');
    }
  };
  alternarSombraHeader();
  window.addEventListener('scroll', alternarSombraHeader, { passive: true });

  /* Menú móvil */
  const botonMenu = document.querySelector('.boton-menu');
  const navEnlaces = document.querySelector('.nav-enlaces');
  if (botonMenu && navEnlaces) {
    botonMenu.addEventListener('click', () => {
      const abierto = navEnlaces.classList.toggle('abierto');
      botonMenu.classList.toggle('activo', abierto);
      botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    navEnlaces.querySelectorAll('a').forEach((enlace) => {
      enlace.addEventListener('click', () => {
        navEnlaces.classList.remove('abierto');
        botonMenu.classList.remove('activo');
        botonMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Animación de aparición al hacer scroll */
  const elementosRevelar = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    elementosRevelar.forEach((el) => observador.observe(el));
  } else {
    elementosRevelar.forEach((el) => el.classList.add('visible'));
  }

  /* Resaltar el enlace del menú según la sección visible */
  const secciones = document.querySelectorAll('main section[id]');
  const enlacesNav = document.querySelectorAll('.nav-enlaces a');
  if ('IntersectionObserver' in window && secciones.length) {
    const observadorNav = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            enlacesNav.forEach((enlace) => {
              enlace.classList.toggle('activo', enlace.getAttribute('href') === '#' + entrada.target.id);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    secciones.forEach((sec) => observadorNav.observe(sec));
  }
});
