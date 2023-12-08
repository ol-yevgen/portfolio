'use client'

import { memo, useEffect, useRef, useState } from 'react';

import './mobileFilters.scss'
import useOutsideClickListener from '@/hooks/useOutsideClickListener';
import { IFiltersProps } from '@/types/types';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { AnimatePresence, motion } from 'framer-motion';


export default function MobileFilters({ filters, setActiveFilter, isLoading, setPage }: IFiltersProps) {
    const userRef = useRef<HTMLUListElement>(null)
    const [filtersList, setFiltersList] = useState<string[]>([''])
    const { isShow, setIsShow } = useOutsideClickListener(userRef)

    useEffect(() => {
        setFiltersList(filters)
    }, [filters])

    const changeSelector = (activeFilter: string) => () => {
        const remainSelectors = filtersList.filter(filter => activeFilter !== filter)
        // setPage(0)
        setFiltersList([activeFilter, ...remainSelectors])
        setIsShow(!isShow)
        setActiveFilter(activeFilter)
        setIsShow(false)
    }  

    return (
        <>
            {!isLoading &&
                <MotionContainer initial={{ y: -30 }} delay={0} duration={1} >
                    <div className='mobile-filters'>
                        <div className='filter-selector'>
                            <div
                                className='btn filter-selector--btn'
                                onClick={() => setIsShow(!isShow)}
                            >
                                {filtersList ? filtersList[0] : ''}
                            </div>
                            <AnimatePresence>
                                {isShow &&
                                    <motion.ul
                                        className='filter-selector--list'
                                        ref={userRef}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            y: 0,
                                            transition: {
                                                delay: 0,
                                                duration: 0.9,
                                                ease: [0.6, -0.05, 0.01, 0.99]
                                            },
                                            type: 'spring'
                                        }}
                                        exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } }}
                                    >
                                        {filtersList.slice(1).sort().map((filter, index) => {
                                            return (
                                                <li
                                                    key={filter}
                                                    className='btn filter-selector--item'
                                                    onClick={changeSelector(filter)}
                                                >
                                                    <MotionContainer initial={{ y: -30 }} delay={index} duration={1} >
                                                        <span>{filter}</span>
                                                    </MotionContainer>
                                                </li>
                                            )
                                        })}
                                    </motion.ul>
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </MotionContainer>

            }
        </>
    )
}