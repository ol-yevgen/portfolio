import Link from 'next/link';
import './navbar.scss'
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

interface INavPropsTypes {
    onCloseOpenMenu: Dispatch<SetStateAction<boolean>>
}

interface INavListTypes {
    id: string,
    link: string,
    label: string
}

const navLinksList: INavListTypes[] = [
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

const Navbar = ({ onCloseOpenMenu }: INavPropsTypes) => {
    const pathname = usePathname()

    return (
        <nav className="menu-nav">
            {navLinksList.map(link => {
                const isActive = pathname === link.link
                return (
                    <Link
                        key={link.id}
                        onClick={() => onCloseOpenMenu(false)}
                        className={`menu-nav--item ${isActive && 'nav__active'}`}
                        href={link.link}>
                        {link.label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;