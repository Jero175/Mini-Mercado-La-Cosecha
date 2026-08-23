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


  // Botón de volver arriba
  const volver = document.createElement('button'); volver.className='volver-arriba'; volver.innerHTML='↑'; volver.setAttribute('aria-label','Volver arriba'); document.body.appendChild(volver);
  volver.style.cssText='position:fixed;right:1.5rem;bottom:6rem;width:44px;height:44px;border:0;border-radius:14px;background:#fff;color:#0f3d63;box-shadow:0 12px 30px rgba(15,61,99,.18);font-size:1.4rem;cursor:pointer;opacity:0;transform:translateY(12px);pointer-events:none;transition:.25s;z-index:25';
  window.addEventListener('scroll',()=>{const show=window.scrollY>500;volver.style.opacity=show?'1':'0';volver.style.transform=show?'translateY(0)':'translateY(12px)';volver.style.pointerEvents=show?'auto':'none'},{passive:true});
  volver.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
