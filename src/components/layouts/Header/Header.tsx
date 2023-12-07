'use client'

import Burger from '@/components/Burger/Burger';
import { useResize } from '@/hooks/useResize';
import './header.scss';

const Header = () => {
    const windowWidth = useResize()

    return (
        <header>
            <div className="header-tags">
                <span className="tags open-tags">html</span>
                <br />
                <span className="tags open-tags body-tags">body</span>
            </div>
            {windowWidth.isScreenXl
                ? null
                : <Burger />
            }
        </header>
    )
}

export default Header;