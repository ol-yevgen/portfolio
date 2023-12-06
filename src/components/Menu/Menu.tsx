'use client'

import Link from 'next/link';
import Image from 'next/image';

import { BurgerContext } from '@/providers/BurgerProvider'
import logo from '../../../public/assets/Y.png'
import { telegramIcon, linkedInIcon, gitHubIcon } from '../../../public/assets/icons';

import './menu.scss'
import { useContext } from 'react';
import Navbar from '../layouts/Navbar/Navbar';

const Menu = () => {
    const { isOpen, setIsOpen } = useContext(BurgerContext)
    const openCloseMenuClass = isOpen ? 'menu menu-open' : 'menu'; 

    return (
        <>

            <menu className={openCloseMenuClass}>
                <div className="menu-logo">
                    <Link href="/"
                        className="menu-logo--link"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="menu-logo--wrapper">
                            <Image className="menu-logo--icon" src={logo} width={33} height={73} alt="logo"></Image>
                        </div>
                        <span>Yevgenii</span>
                    </Link>
                    <span className="menu-logo--text">Web Developer</span>
                </div>
                <Navbar
                    onCloseOpenMenu={setIsOpen}
                />
                <ul className="menu-social">
                    <li>
                        <Link
                            className="social-link"
                            href="https://www.linkedin.com/in/yevgenii-oliinyk-0bbab0210/"
                            target="_blank"
                        // name="linkedin"
                        >
                            {linkedInIcon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="social-link"
                            href="https://github.com/ol-yevgen"
                            target="_blank"
                        // name="github"
                        >
                            {gitHubIcon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="social-link"
                            href="https://t.me/oliinyk94"
                            target="_blank"
                        // name="telegram"
                        >
                            {telegramIcon}
                        </Link>
                    </li>
                </ul >
            </menu >
        </>
    )
}

export default Menu;