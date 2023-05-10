import { v4 as uuidv4 } from 'uuid';

import Nataliia from '../assets/myProjects/Nataliia.webp'
import MyPortfolio from '../assets/myProjects/MyPortfolio.webp'
import Tracker from '../assets/myProjects/Tracker.webp';
import ToDo from '../assets/myProjects/ToDo.webp';
import NataliaPortfolio from '../assets/myProjects/Natalia-portfolio.webp';
import Memory from '../assets/myProjects/Memory.webp';
import Dino from '../assets/myProjects/Dino.webp';

const projectsData = [
    {
        id: uuidv4(),
        title: 'Portfolio',
        image: Nataliia,
        stack: 'ReactJS, Redux, JavaScript, SCSS, Formik, Google Map API',
        gitHubLink: 'https://github.com/ol-yevgen/nataliia_shpaniuk',
        projectLink: 'https://nataliia-shpaniuk.vercel.app/',
        filter: 'landings'
    },
    {
        id: uuidv4(),
        title: 'My Portfolio',
        image: MyPortfolio,
        stack: 'ReactJS, Redux, JavaScript, Formik, SCSS',
        gitHubLink: 'https://github.com/ol-yevgen/personal-portfolio',
        projectLink: 'https://personal-portfolio-ol-yevgen.vercel.app/',
        filter: 'landings'
    },
    {
        id: uuidv4(),
        title: 'Tracker',
        image: Tracker,
        stack: 'ReactJS, Redux, REST, JavaScript, SCSS',
        gitHubLink: 'https://github.com/ol-yevgen/react-redux-tracker',
        projectLink: 'https://react-redux-tracker.onrender.com/',
        filter: 'apps'
    },
    {
        id: uuidv4(),
        title: 'ToDo',
        image: ToDo,
        stack: 'ReactJS, JavaScript, SCSS, localstorage',
        gitHubLink: 'https://github.com/ol-yevgen/react-ToDo',
        projectLink: 'https://react-to-do-psi.vercel.app/',
        filter: 'apps'
    },
    {
        id: uuidv4(),
        title: 'Portfolio',
        image: NataliaPortfolio,
        stack: 'JavaScript, SCSS, Gulp, localstorage',
        gitHubLink: 'https://github.com/ol-yevgen/portfolio-Natalia_Shpaniuk',
        projectLink: 'https://ol-yevgen.github.io/portfolio-Natalia_Shpaniuk/',
        filter: 'landings'
    },
    {
        id: uuidv4(),
        title: 'Memory game',
        image: Memory,
        stack: 'JavaScript, SCSS, Gulp, localstorage',
        gitHubLink: 'https://github.com/ol-yevgen/memory_game',
        projectLink: 'https://ol-yevgen.github.io/memory_game/',
        filter: 'games'
    },
    {
        id: uuidv4(),
        title: 'Dino game',
        image: Dino,
        stack: 'JavaScript, SCSS',
        gitHubLink: 'https://github.com/ol-yevgen/dino-game',
        projectLink: 'https://ol-yevgen.github.io/dino-game/',
        filter: 'games'
    },
    
]

export default projectsData;