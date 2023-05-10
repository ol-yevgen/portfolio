import { lazy, createRef } from "react";

const Page404 = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Skills = lazy(() => import('../pages/Skills/Skills'))
const MyProjects = lazy(() => import('../pages/MyProjects/MyProjects'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))

const routes = [
    {
        path: '/',
        name: 'Home',
        element: <Home />,
        nodeRef: createRef()
    },
    {
        path: '/about',
        name: 'About',
        element: <About />,
        nodeRef: createRef(),
    },
    {
        path: '/skills',
        name: 'Skills',
        element: <Skills />,
        nodeRef: createRef()
    },
    {
        path: '/projects',
        name: 'Projects',
        element: <MyProjects />,
        nodeRef: createRef()
    },
    {
        path: '/contacts',
        name: 'Contacts',
        element: <Contacts />,
        nodeRef: createRef()
    },
    {
        path: '*',
        name: '404',
        element: <Page404 />,
        nodeRef: createRef()
    }
]

export default routes;