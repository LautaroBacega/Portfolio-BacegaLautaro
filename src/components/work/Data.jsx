import EcommerceIMG from '../../assets/EcommerceIMG.png';
import CoderBackendIMG from '../../assets/CoderBackendImg.jpeg';
import abbmxFreestyleIMG from '../../assets/abbmxFreestyleIMG.png';
import autenticacionIMG from '../../assets/autenticacionIMG.png'
import CineListaIMG from '../../assets/CineLista.png'

export const projectsData = [
    {
        id: 1,
        image: EcommerceIMG,
        title: 'Ecommerce - Tienda Bmx',
        category: 'Fullstack',
        link: 'https://tienda-bmx-render.onrender.com',
    },
    {
        id: 2,
        image:  CineListaIMG,
        title: 'CineLista',
        category: 'Fullstack',
        link: 'https://movieapp-8x3t.onrender.com/',
    },
    {
        id: 3,
        image: autenticacionIMG,
        title: 'Autenticación',
        category: 'Fullstack',
        link: 'https://autenticacion-o8nx.onrender.com/',
    },
    {
        id: 4,
        image: abbmxFreestyleIMG,
        title: 'Escuela de BMX Freestyle',
        category: 'Frontend',
        link: 'https://abbmxfreestyle.netlify.app/',
    },
    {
        id: 5,
        image: CoderBackendIMG,
        title: 'Proyecto Final Desarrollo Backend',
        category: 'Backend',
        link: 'https://github.com/LautaroBacega/Entrega-Final---Bacega-Lautaro---Backend-3.git',
    }
]

export const projectsNav = [
    {
        name: 'Todos',
    },
    {
        name: 'Frontend',
    },
    {
        name: 'Backend',
    },
    {
        name: 'Fullstack',
    }
]