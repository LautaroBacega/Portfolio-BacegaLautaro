import EcommerceIMG from '../../assets/EcommerceIMG.jpeg';
import CoderBackendIMG from '../../assets/CoderBackendImg.jpeg';


export const projectsData = [
    {
        id: 1,
        image: EcommerceIMG,
        title: 'Proyecto Final Desarrollo Frontend',
        category: 'Frontend',
        link: 'https://accesoriosbmx2.netlify.app/',
    },
    {
        id: 2,
        image: CoderBackendIMG,
        title: 'Proyecto Final Desarrollo Backend',
        category: 'Backend',
        link: 'https://github.com/LautaroBacega/Entrega-Final---Bacega-Lautaro---Backend-3.git',
    }
]

// Poner nombre de la varaiable 'name' de acuerdo a lo colocado en la variable anterior 'category'
export const projectsNav = [
    {
        name: 'Todos',
    },
    {
        name: 'Frontend',
    },
    {
        name: 'Backend',
    }/* ,
    {
        name: 'Fullstack',
    }, */
]