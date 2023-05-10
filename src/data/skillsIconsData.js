import { v4 as uuidv4 } from 'uuid';

import JavaSctiptIcon from '../assets/skills/javascript.svg';
import ReactJSIcon from '../assets/skills/reactjs.svg';
import ReduxIcon from '../assets/skills/redux.svg';
import SCSSIcon from '../assets/skills/scss.svg';
import Html5Icon from '../assets/skills/html-5.svg';
import CSS3Icon from '../assets/skills/css-3.svg';
import gitIcon from '../assets/skills/git.svg';
import VSCodeIcon from '../assets/skills/vscode.svg';
import WebpackIcon from '../assets/skills/webpack.svg';
import GulpIcon from '../assets/skills/gulp.svg';
import npmIcon from '../assets/skills/npm.svg';

const skillIconsData = [
    {
        id: uuidv4(),
        icon: JavaSctiptIcon,
        title: 'JavaSctipt'
    },
    {
        id: uuidv4(),
        icon: ReactJSIcon,
        title: 'ReactJS'
    },
    {
        id: uuidv4(),
        icon: ReduxIcon,
        title: 'Redux'
    },
    {
        id: uuidv4(),
        icon: SCSSIcon,
        title: 'SCSS'
    },
    {
        id: uuidv4(),
        icon: Html5Icon,
        title: 'Html-5'
    },
    {
        id: uuidv4(),
        icon: CSS3Icon,
        title: 'CSS-3'
    },
    {
        id: uuidv4(),
        icon: gitIcon,
        title: 'git'
    },
    {
        id: uuidv4(),
        icon: VSCodeIcon,
        title: 'VSCode'
    },
    {
        id: uuidv4(),
        icon: WebpackIcon,
        title: 'Webpack'
    },
    {
        id: uuidv4(),
        icon: GulpIcon,
        title: 'Gulp'
    },
    {
        id: uuidv4(),
        icon: npmIcon,
        title: 'npm'
    },
]

export default skillIconsData;