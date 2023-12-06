'use client'

import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Spinner from '@/components/ui/Spinner/Spinner'
import { Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function AnimationProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const params = usePathname()
    
    return (
        <AnimatePresence>
            <main
                className="animation-container"
            >
                {children}
            </main>
            {/* <motion.div
                key={params}
                // initial="initialState"
                // animate="animateState"
                exit={{opacity: 0}}
                transition={{
                    duration: 0.75
                }}
                // variants={{
                //     initialState: {
                //         opacity: 0,
                //         // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                //     },
                //     animateState: {
                //         opacity: 1,
                //         // clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
                //     },
                //     exitState: {
                //         opacity: 0.5,
                //         // clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"

                //         // clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"

                //         // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                //     }
                // }}
            >
                
            </motion.div> */}
        </AnimatePresence>
    )
}