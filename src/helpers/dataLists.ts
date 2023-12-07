import { telegramIcon, linkedInIcon, gitHubIcon } from '../../public/assets/icons';
import { INavListTypes } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';

export const socialLinks = [
    {
        id: uuidv4(),
        href: "https://www.linkedin.com/in/yevgenii-oliinyk-0bbab0210/",
        icon: linkedInIcon
    },
    {
        id: uuidv4(),
        href: "https://github.com/ol-yevgen",
        icon: gitHubIcon
    },
    {
        id: uuidv4(),
        href: "https://t.me/oliinyk94",
        icon: telegramIcon
    },
]

export const navLinksList: INavListTypes[] = [
    {
        id: uuidv4(),
        link: '/about',
        label: 'About'
    },
    {
        id: uuidv4(),
        link: '/skills',
        label: 'My Skills'
    },
    {
        id: uuidv4(),
        link: '/projects',
        label: 'Projects'
    },
    {
        id: uuidv4(),
        link: '/contacts',
        label: 'Contacts'
    },
]