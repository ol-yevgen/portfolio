'use client'

import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { BurgerContext } from '@/providers/BurgerProvider'
import { AnimatePresence, motion } from 'framer-motion';
import { socialLinks } from '@/helpers/dataLists'
import { useResize } from '@/hooks/useResize';
import Logo from '@/components/ui/Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import Link from 'next/link';
import './menu.scss'

const Menu = () => {
    const { isOpen, setIsOpen } = useContext(BurgerContext)
    const width = useResize()

    return (
        <AnimatePresence mode='popLayout'>
            {(isOpen || width.isScreenXl) &&
                <motion.menu
                    key='menu'
                    className="menu"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        x: '0%',
                        y: '0%',
                        transition: {
                            delay: 0,
                            duration: .8,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        },
                        type: 'spring'
                    }}

                    exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }}
                >
                    {/* <menu className='menu'> */}
                    <Logo setIsOpen={setIsOpen} isOpen={isOpen} />
                    <Navbar
                        onCloseOpenMenu={setIsOpen}
                    />
                    <ul className="menu-social">
                        {socialLinks.map((link, index) => {
                            return (<li key={link.id}>
                                <MotionContainer initial={{ y: -40 }} delay={7 + index} duration={0.9}>
                                    <Link
                                        className="social-link"
                                        href={link.href}
                                        target="_blank"
                                    // name="linkedIn"
                                    >
                                        {link.icon}
                                    </Link>
                                </MotionContainer>
                            </li>)
                        })}

                    </ul >
                    {/* </menu > */}
                </motion.menu>
            }
        </AnimatePresence>
    )
}

export default Menu;
