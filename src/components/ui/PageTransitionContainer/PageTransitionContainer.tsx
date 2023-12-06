'use client'
import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
    // initial: { x: number } | { y: number }
    // delay: number
    // duration: number
    // isVisible: boolean
}

export default function PageTransitionContainer({ children }: PropsWithChildren<{}>) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key='page'
                className="container-page"
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    x: '0%',
                    y: '0%',
                    transition: {
                        delay: 0.3,
                        duration: .9,
                        ease: [0.6, -0.05, 0.01, 0.99]
                    },
                    type: 'spring'
                }}
                exit={{ opacity: 0, y: '10%' }}
            >
                {children}
            </motion.div>
            
        </AnimatePresence>

    )
};
