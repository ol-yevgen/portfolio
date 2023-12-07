import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { navLinksList } from '@/helpers/dataLists'
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './navbar.scss'

interface INavPropsTypes {
    onCloseOpenMenu: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ onCloseOpenMenu }: INavPropsTypes) => {
    const pathname = usePathname()

    return (
        <nav className="menu-nav">
            {navLinksList.map((link, index) => {
                const isActive = pathname === link.link
                return (
                    <Link
                        key={link.id}
                        onClick={() => onCloseOpenMenu(false)}
                        className={`menu-nav--item ${isActive && 'nav__active'}`}
                        href={link.link}>
                        <MotionContainer initial={{ y: -40 }} delay={7 - index} duration={0.9}>
                            {link.label}
                        </MotionContainer>
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;