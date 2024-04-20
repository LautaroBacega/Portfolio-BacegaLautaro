import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Proyecto Final Desarrollo Frontend',
        category: 'Frontend',
        link: 'https://melatiniturism0.netlify.app/',
    },
    {
        id: 2,
        image: Work2,
        title: 'Bolsa de Trabajo Instituto Juan23',
        category: 'Fullstack',
        link: '',
    }
]

// Poner nombre de la varaiable 'name' de acuerdo a lo colocado en la variable anterior 'category'
export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Frontend',
    },
    {
        name: 'Backend',
    },
    {
        name: 'Fullstack',
    },
]