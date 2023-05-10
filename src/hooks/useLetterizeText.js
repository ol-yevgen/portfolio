import { Fragment, useEffect, useState, useRef } from "react"
import { motion, useAnimate, stagger, } from 'framer-motion';

import Pic from '../assets/icons/Y.png'

export const useLetterizeText = (str) => {
    const bubbleAnimation = (item) => {
        item.target.className = 'bubble animation'
        const interval = setTimeout(() => {
            item.target.className = 'bubble'
        }, 1000)

        return () => clearTimeout(interval)
    }

    const letterizeText = str.split('').map((letter, index) => {

        if (letter === ' ') {
            return ' '
        } else if (letter === ',') {
            return <Fragment key={index}>
                <motion.span
                    id={index}
                    onHoverStart={(item) => (+(item.target.id) === index) ? bubbleAnimation(item) : null}
                >
                    {letter}
                </motion.span>
                <br />
            </Fragment>
        } else if (letter === 'Y') {
            return <span className='logo-wrapper' key={index}><img className='home-logo' src={Pic} alt="Y" /></span>
        } else {
            return <motion.span
                id={index}
                onHoverStart={(item) => (+(item.target.id) === index) ? bubbleAnimation(item) : null}
                key={index}
            >{letter}</motion.span>
        }

    })
    return letterizeText;
}

export const useStartTextAnimation = () => {
    const [pageLoaded, setPageLoaded] = useState(false);

    const scope = useLetterAnimation(pageLoaded);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setTimeout(() => {
            setPageLoaded(true)
        }, 400)

        return () => clearTimeout(interval)
    }, [textRef])

    return { pageLoaded, scope, textRef }
}

export const useLetterAnimation = (pageLoaded) => {

    const staggerMenuItems = stagger(0.08);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            'span',
            pageLoaded
                ? { opacity: 1, rotate: 0}
                : { opacity: 0, rotate: -90},
            {
                duration: 0.2,
                delay: pageLoaded ? staggerMenuItems : 0,
                type: 'spring'
            }
        );
    }, [pageLoaded, animate, staggerMenuItems])

    return scope
}