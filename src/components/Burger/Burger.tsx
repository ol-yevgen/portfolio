'use client' 

import { BurgerContext } from '@/providers/BurgerProvider';
import { useContext, useEffect } from 'react';
import './burger.scss';

const Burger = () => {
    const { isOpen, setIsOpen } = useContext(BurgerContext)

    const burgerStick1Animation = isOpen ? "stick stick-1 open" : "stick stick-1 close";
    const burgerStick2Animation = isOpen ? "stick stick-2 open" : "stick stick-2 close"
    const burgerStick3Animation = isOpen ? "stick stick-3 open" : "stick stick-3 close"

    useEffect(() => {
        const bodyScrollToggle = document.querySelector('html') as HTMLHtmlElement
        if (isOpen) {
            bodyScrollToggle.classList.add('scrollOff')
        }

        return () => bodyScrollToggle.classList.remove('scrollOff')
    }, [isOpen])


    function onOpenCloseMobileMenu () {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className="header-burger"
            onClick={onOpenCloseMobileMenu}
        >
            <div className={burgerStick1Animation}></div>
            <div className={burgerStick2Animation}></div>
            <div className={burgerStick3Animation}></div>
        </div>
    )
}

export default Burger;