import tiendabmxIMG1 from "../../assets/tiendabmxIMG1.png"
import tiendabmxIMG2 from "../../assets/tiendabmxIMG2.png"
import tiendabmxIMG3 from "../../assets/tiendabmxIMG3.png"
import tiendabmxIMG4 from "../../assets/tiendabmxIMG4.png"
import tiendabmxIMG5 from "../../assets/tiendabmxIMG5.png"
import tiendabmxIMG6 from "../../assets/tiendabmxIMG6.png"
import tiendabmxIMG7 from "../../assets/tiendabmxIMG7.png"
import tiendabmxIMG8 from "../../assets/tiendabmxIMG8.png"
import tiendabmxIMG9 from "../../assets/tiendabmxIMG9.png"
import tiendabmxIMG10 from "../../assets/tiendabmxIMG10.png"
import cinelistaIMG1 from "../../assets/cinelistaIMG1.png"
import cinelistaIMG2 from "../../assets/cinelistaIMG2.png"
import cinelistaIMG3 from "../../assets/cinelistaIMG3.png"
import cinelistaIMG4 from "../../assets/cinelistaIMG4.png"
import cinelistaIMG5 from "../../assets/cinelistaIMG5.png"
import cinelistaIMG6 from "../../assets/cinelistaIMG6.png"
import autenticaionIMG1 from "../../assets/autenticacionIMG1.png"
import autenticaionIMG2 from "../../assets/autenticacionIMG2.png"
import autenticaionIMG3 from "../../assets/autenticacionIMG3.png"
import autenticaionIMG4 from "../../assets/autenticacionIMG4.png"
import autenticaionIMG5 from "../../assets/autenticacionIMG5.png"
import autenticaionIMG6 from "../../assets/autenticacionIMG6.png"
import abbmxIMG1 from "../../assets/abbmxIMG1.png"
import abbmxIMG2 from "../../assets/abbmxIMG2.png"
import abbmxIMG3 from "../../assets/abbmxIMG3.png"
import abbmxIMG4 from "../../assets/abbmxIMG4.png"
import somosBahia1 from "../../assets/somosBahia1.png"
import somosBahia2 from "../../assets/somosBahia2.png"
import somosBahia3 from "../../assets/somosBahia3.png"
import somosBahia4 from "../../assets/somosBahia4.png"
import somosBahia5 from "../../assets/somosBahia5.png"
import somosBahia6 from "../../assets/somosBahia6.png"
import somosBahia7 from "../../assets/somosBahia7.png"
import LauchaBmxStore from "../../assets/LauchaBmxStore.png"
import LauchaBmxStore1 from "../../assets/LauchaBmxStore1.png"
import LauchaBmxStore2 from "../../assets/LauchaBmxStore2.png"
import LauchaBmxStore3 from "../../assets/LauchaBmxStore3.png"
import LauchaBmxStore4 from "../../assets/LauchaBmxStore4.png"
import LauchaBmxStore5 from "../../assets/LauchaBmxStore5.png"
import LauchaBmxStore6 from "../../assets/LauchaBmxStore6.png"

export const projectsData = [
  {
    id: 1,
    image: tiendabmxIMG1,
    images: [
      tiendabmxIMG1,
      tiendabmxIMG2,
      tiendabmxIMG3,
      tiendabmxIMG4,
      tiendabmxIMG5,
      tiendabmxIMG6,
      tiendabmxIMG7,
      tiendabmxIMG8,
      tiendabmxIMG9,
      tiendabmxIMG10,
    ],
    title: "Ecommerce - Tienda Bmx",
    category: "Fullstack",
    description:
      "Una tienda online completa para productos BMX con carrito de compras, sistema de pagos, autenticacion y gestión de inventario.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Axios"],
    link: "https://accesoriosbmx.onrender.com/",
    repository: "https://github.com/LautaroBacega/Tienda-BMX-render",
    features: ["Carrito de compras", "Autenticación", "Panel de administración", "Gestión de inventario"],
  },
  {
    id: 2,
    image: cinelistaIMG1,
    images: [cinelistaIMG1, cinelistaIMG2, cinelistaIMG3, cinelistaIMG4, cinelistaIMG5, cinelistaIMG6],
    title: "CineLista",
    category: "Fullstack",
    description: "Aplicación para descubrir y gestionar listas de películas con integración a APIs de cine.",
    technologies: ["React", "Node.js", "MongoDB", "TMDB API"],
    link: "https://movieapp-8x3t.onrender.com/",
    repository: "https://github.com/LautaroBacega/CineLista",
    features: ["Búsqueda de películas", "Listas personalizadas", "Recomendaciones"],
  },
  {
    id: 3,
    image: autenticaionIMG1,
    images: [
      autenticaionIMG1,
      autenticaionIMG2,
      autenticaionIMG3,
      autenticaionIMG4,
      autenticaionIMG5,
      autenticaionIMG6,
    ],
    title: "Autenticación",
    category: "Fullstack",
    description: "Sistema completo de autenticación con JWT, registro, login y recuperación de contraseña.",
    technologies: ["React", "Node.js", "JWT", "bcrypt", "Nodemailer"],
    link: "https://autenticacion-o8nx.onrender.com/",
    repository: "https://github.com/LautaroBacega/MERN-Authentication-System",
    features: ["Login/Registro", "JWT Tokens", "Recuperación de contraseña", "Validaciones"],
  },
  {
    id: 4,
    image: abbmxIMG1,
    images: [abbmxIMG1, abbmxIMG2, abbmxIMG3, abbmxIMG4],
    title: "Escuela de BMX Freestyle",
    category: "Frontend",
    description: "Sitio web para una escuela de BMX Freestyle con información de cursos y instructores.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://abbmxfreestyle.netlify.app/",
    repository: "https://github.com/LautaroBacega/ABBMXFreestyle",
    features: ["Diseño responsive", "Galería de fotos", "Formulario de contacto", "Información de contacto"],
  },
  {
    id: 5,
    image: somosBahia1,
    images: [somosBahia1, somosBahia2, somosBahia3, somosBahia4, somosBahia5, somosBahia6, somosBahia7],
    title: "Somos Bahía - Landing Page Política",
    category: "Frontend",
    description:
      "Landing page moderna y responsive para el movimiento político Somos Bahía, con propuestas, valores, candidatos e integración de participación ciudadana.",
    technologies: ["React", "Vite", "Tailwind CSS", "Recharts", "Google Forms"],
    link: "https://somosbahia.netlify.app/",
    features: [
      "Diseño responsive",
      "Secciones de propuestas, valores y candidatos",
      "Gráficos interactivos con Recharts",
      "Integración con Google Forms",
      "Animaciones y micro-interacciones",
      "Optimización de imágenes",
    ],
  },
  {
    id: 6,
    image: LauchaBmxStore,
    images: [LauchaBmxStore1, LauchaBmxStore2, LauchaBmxStore3, LauchaBmxStore4, LauchaBmxStore5, LauchaBmxStore6],
    title: "Laucha Bmx Store - Tienda",
    category: "Frontend",
    description:
      "Tienda online estática desarrollada para Laucha BMX Store. El sitio público muestra un catálogo de productos y carrito de compras. Localmente incluye un panel de administración para gestionar productos (CRUD).",
    technologies: ["React", "Vite", "Tailwind CSS", "Context API", "React Router"],
    link: "https://lauchabmxstore.netlify.app/",
    features: [
      "Catálogo de productos con diseño responsive",
      "Panel de administración local para CRUD de productos",
      "Gestión de estado con Context API",
      "Optimización de imágenes",
      "Animaciones y micro-interacciones",
    ],
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
