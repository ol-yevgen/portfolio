import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
    sectionClass: string
    arrayText: string[]
    isLoaded: boolean
}

export default function SectionText({ arrayText, sectionClass, isLoaded }: IProps) {
    return (
        <AnimatePresence mode='wait'>
            <div className={`text tag-p ${sectionClass}`}>
                <div className='text-container'>
                    {isLoaded
                        ? <></>
                        : arrayText.map((text, index) => {
                            const textId = uuidv4()

                            return <motion.p
                                key={textId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.9,
                                        ease: [0.6, -0.05, 0.01, 0.99]
                                    }
                                }}
                            >
                                {text}
                            </motion.p>
                        })
                    }
                </div>
            </div>
        </AnimatePresence>
    )
}


// const easing = [0.6, -0.05, 0.01, 0.99]

// const stagger = {
//     animate: {
//         transition: {
//             stagger: 0.6
//         }
//     }
// }


// const fadeInUp = {
//     initial: {
//         y: 60,
//         opacity: 0
//     },
//     animate: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.6,
//             // delay: stagger,
//             ease: easing
//         }
//     }
// }