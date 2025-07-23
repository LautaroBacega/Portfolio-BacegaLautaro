import EcommerceIMG from "../../assets/EcommerceIMG.png"
import CoderBackendIMG from "../../assets/CoderBackendImg.jpeg"
import abbmxFreestyleIMG from "../../assets/abbmxFreestyleIMG.png"
import autenticacionIMG from "../../assets/autenticacionIMG.png"
import CineListaIMG from "../../assets/CineLista.png"

export const projectsData = [
  {
    id: 1,
    image: EcommerceIMG,
    images: [EcommerceIMG, EcommerceIMG, EcommerceIMG], // Múltiples imágenes para el carrusel
    title: "Ecommerce - Tienda Bmx",
    category: "Fullstack",
    description:
      "Una tienda online completa para productos BMX con carrito de compras, sistema de pagos y gestión de inventario.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://tienda-bmx-render.onrender.com",
    repository: "https://github.com/usuario/tienda-bmx",
    features: ["Carrito de compras", "Pagos con Stripe", "Panel de administración", "Gestión de inventario"],
  },
  {
    id: 2,
    image: CineListaIMG,
    images: [CineListaIMG, CineListaIMG, CineListaIMG],
    title: "CineLista",
    category: "Fullstack",
    description: "Aplicación para descubrir y gestionar listas de películas con integración a APIs de cine.",
    technologies: ["React", "Node.js", "PostgreSQL", "TMDB API"],
    link: "https://movieapp-8x3t.onrender.com/",
    repository: "https://github.com/usuario/cinelista",
    features: ["Búsqueda de películas", "Listas personalizadas", "Reseñas", "Recomendaciones"],
  },
  {
    id: 3,
    image: autenticacionIMG,
    images: [autenticacionIMG, autenticacionIMG, autenticacionIMG],
    title: "Autenticación",
    category: "Fullstack",
    description: "Sistema completo de autenticación con JWT, registro, login y recuperación de contraseña.",
    technologies: ["React", "Node.js", "JWT", "bcrypt", "Nodemailer"],
    link: "https://autenticacion-o8nx.onrender.com/",
    repository: "https://github.com/usuario/autenticacion",
    features: ["Login/Registro", "JWT Tokens", "Recuperación de contraseña", "Validaciones"],
  },
  {
    id: 4,
    image: abbmxFreestyleIMG,
    images: [abbmxFreestyleIMG, abbmxFreestyleIMG, abbmxFreestyleIMG],
    title: "Escuela de BMX Freestyle",
    category: "Frontend",
    description: "Sitio web para una escuela de BMX Freestyle con información de cursos y instructores.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://abbmxfreestyle.netlify.app/",
    repository: "https://github.com/usuario/bmx-freestyle",
    features: ["Diseño responsive", "Galería de fotos", "Formulario de contacto", "Información de cursos"],
  },
  {
    id: 5,
    image: CoderBackendIMG,
    images: [CoderBackendIMG, CoderBackendIMG, CoderBackendIMG],
    title: "Proyecto Final Desarrollo Backend",
    category: "Backend",
    description: "API REST completa para un sistema de e-commerce con todas las funcionalidades backend.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Passport"],
    link: "https://github.com/LautaroBacega/Entrega-Final---Bacega-Lautaro---Backend-3.git",
    repository: "https://github.com/LautaroBacega/Entrega-Final---Bacega-Lautaro---Backend-3.git",
    features: ["API REST", "Autenticación", "WebSockets", "Base de datos", "Documentación"],
  },
]

export const projectsNav = [
  {
    name: "Todos",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Fullstack",
  },
]
