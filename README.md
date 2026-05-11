# 🎠 Planeta Feliz — Landing Page Parque Infantil

Landing page completa para un parque infantil, construida con **Next.js 14** y **Tailwind CSS**.

## Secciones incluidas

| Sección | Descripción |
|---|---|
| **Navbar** | Menú fijo con scroll suave y menú responsive hamburguesa |
| **Hero** | Portada con degradado animado, estadísticas y CTA |
| **Atracciones** | Grid de 6 atracciones con cards interactivas |
| **Precios** | 3 planes (Básico, Familiar, Cumpleaños) con highlight del popular |
| **Galería** | Grid masonry con efecto hover |
| **Testimonios** | 3 reseñas de familias con estrellas |
| **Contacto** | Formulario de reserva + info de contacto |
| **Footer** | Links, horario, redes sociales |

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## Estructura del proyecto

```
parque-infantil/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Atracciones.tsx
│   ├── Precios.tsx
│   ├── Galeria.tsx
│   ├── Testimonios.tsx
│   ├── Contacto.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
