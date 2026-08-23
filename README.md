# Mini Mercado La Cosecha — sitio web (proyecto de taller)

Sitio web de una sola página para un comercio de Villanueva, hecho con HTML y CSS puros. Antes de publicarlo, reemplacen el nombre, los textos y las imágenes de ejemplo por los del negocio real (con el permiso del dueño).

## Estructura del proyecto
```
villanueva-comercio-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js     (menú móvil, animaciones al hacer scroll)
├── img/            (fotos reales del negocio)
├── taller-respuestas.md   (respuestas escritas del taller)
└── README.md
```

## Cómo publicarlo en GitHub Pages (gratis)

1. **Crear una cuenta en GitHub** (si no tienen una): https://github.com/signup

2. **Crear un repositorio nuevo**
   - Entren a https://github.com/new
   - Nombre del repositorio, por ejemplo: `mini-mercado-la-cosecha`
   - Déjenlo en **Public**
   - No marquen "Add a README" (ya tienen uno) — clic en **Create repository**

3. **Subir los archivos**
   - En la página del repositorio recién creado, clic en **uploading an existing file**
   - Arrastren todos los archivos y carpetas del proyecto (`index.html`, la carpeta `css`, la carpeta `img`, `README.md`, `taller-respuestas.md`)
   - Abajo, en "Commit changes", clic en **Commit changes** para confirmar la subida

4. **Activar GitHub Pages**
   - En el repositorio, vayan a **Settings** (pestaña de arriba)
   - En el menú de la izquierda, clic en **Pages**
   - En "Build and deployment" → "Source", elijan **Deploy from a branch**
   - En "Branch", elijan `main` y la carpeta `/ (root)` → clic en **Save**

5. **Ver el sitio publicado**
   - Esperen 1–2 minutos y recarguen la página de **Settings → Pages**
   - Va a aparecer un enlace parecido a:
     `https://SU-USUARIO.github.io/mini-mercado-la-cosecha/`
   - Ese es el enlace público que pueden compartir y entregar

## Editar el sitio después de publicado
- Cualquier cambio en `index.html` o `css/styles.css` que suban al repositorio se refleja automáticamente en el sitio publicado (puede tardar uno o dos minutos).
- Para reemplazar los recuadros de ejemplo por fotos reales: guarden las fotos en la carpeta `img/`, y en `index.html` reemplacen los bloques `<div class="marco-foto">...</div>`, `<div class="hero-arte">...</div>` y `<div class="marcador-imagen">...</div>` por una etiqueta `<img src="img/nombre-de-la-foto.jpg" alt="descripción de la foto">`.

## Bancos de imágenes gratuitos recomendados
- Unsplash — https://unsplash.com
- Pexels — https://pexels.com
- Freepik — https://freepik.com
