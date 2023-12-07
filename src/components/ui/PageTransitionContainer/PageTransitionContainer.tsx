'use client'
import { PropsWithChildren, memo, } from "react";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";

function PageTransitionContainer({ children }: PropsWithChildren<{}>) {
    const path = usePathname()

    return (
        <motion.div
            key={path}
            className="container-page"
            initial={{ opacity: 0, y: '-1%' }}
            animate={{
                opacity: 1,
                x: '0%',
                y: '0%',
                transition: {
                    delay: 0,
                    duration: .9,
                    ease: [0.6, -0.05, 0.01, 0.99]
                },
                type: 'spring'
            }}
            exit={{
                opacity: 0,
                x: '100%',
                transition: {
                    delay: 0,
                    duration: .9,
                    ease: [0.6, -0.05, 0.01, 0.99]
                },
            }}
        >
            {children}
        </motion.div>
    )
};

export default memo(PageTransitionContainer)