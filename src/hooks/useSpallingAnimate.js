import { useEffect, useState, useRef } from "react";
import { useAnimate, stagger, } from 'framer-motion';

export const useStartSpallingAnimation = () => {
    const iconsRef = useRef(null);
    const [pageLoaded, setPageLoaded] = useState(false);
    const scopeSkillIcons = useAnimation( pageLoaded);

    useEffect(() => {
        const interval = setTimeout(() => {
            setPageLoaded(true)
        }, 300)

        return () => clearTimeout(interval)
    }, [iconsRef])

    return {pageLoaded, scopeSkillIcons }
}

export const useAnimation = (pageLoaded) => {

    const staggerMenuItems = stagger(0.18);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            'li',
            pageLoaded
                ? { opacity: 1, x: '0%', }
                : { opacity: 0, x: '100%' },
            {
                duration: 0.17,
                delay: pageLoaded ? staggerMenuItems : 0
            }
        );
    }, [pageLoaded, animate, staggerMenuItems])

    return scope
}

