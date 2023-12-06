'use client'
import LetteringText from '../../hooks/useLetterizeText';
import SectionText from '@/components/SectionText/SectionText';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IAboutPageTypes, IAboutReqTypes } from '@/types/types'
import { BASE_API } from '@/helpers/constants'
import Image from 'next/image';

import Spinner from '@/components/ui/Spinner/Spinner';
import DownloadButton from '@/components/ui/Buttons/DownloadButton'
import './about.scss'
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer';
import { AnimatePresence } from 'framer-motion';

export default function About() {
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['aboutPage'],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API}/api/about`) as IAboutReqTypes
            return data as IAboutPageTypes
        },
    })

    const title = "About me"

    return (
        <section className="container section-wrapper about">
            <div className="section-wrapper--discription">
                <h2
                    className="discription-title"
                    aria-label={title}
                >
                    <LetteringText text={title} isLoaded={!isLoading} />
                </h2>

                <SectionText
                    arrayText={data?.about.aboutText as string[]}
                    sectionClass='about-text'
                    isLoaded={isLoading}
                />
                <MotionContainer initial={{ y: 30 }} delay={7} duration={0.9} >
                    <DownloadButton
                        fileName='Yevgenii_Oliinyk-Frontend_CV'
                    />
                </MotionContainer>
            </div>
            <div className="section-wrapper--visual" >
                {isLoading ?
                    <></>
                    // <Spinner
                    //     bg=''
                    //     size='100px'
                    //     color="#08fdd8" />
                    :
                    <div className="about-photo--container">
                        <MotionContainer initial={{ x: 40 }} delay={1} duration={1} >
                            <Image
                                className="about-photo"
                                src={data?.about.aboutPhoto as string}
                                width={100}
                                height={150}
                                alt="me"
                            />
                        </MotionContainer>
                    </div>
                }
            </div>

        </section>
    )
}
