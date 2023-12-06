'use client'

import './skills.scss'
import axios from 'axios';
import { BASE_API } from '@/helpers/constants';
import { useQuery } from '@tanstack/react-query';
import { ISkillsIconsReqTypes, ISkillsTextReq, ISkillsTextTypes } from '@/types/types';
import Image from 'next/image';
import Spinner from '@/components/ui/Spinner/Spinner';
import SectionText from '@/components/SectionText/SectionText';
import LetteringText from '@/hooks/useLetterizeText';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer';
import { AnimatePresence } from 'framer-motion';

const Skills = () => {
    const title = 'My Skills'

    const { data: textReq, isLoading: textLoading, isError: textIsError, error: textError } = useQuery({
        queryKey: ['skillsText'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/skillsText`) as ISkillsTextReq
                return data as ISkillsTextTypes
            } catch (error) {
                console.log(error);
            }
        },
    })

    const { data: icons, isLoading: iconsLoading, isSuccess, isError: iconsIsError, error: iconsError } = useQuery({
        queryKey: ['skillsList'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/skillsIcons`)
                return data as ISkillsIconsReqTypes
            } catch (error) {
                console.log(error);
            }
        },
    })

    return (
        <section className="container skills">
            <h2
                className="discription-title"
                aria-label={title}
            >
                <LetteringText text={title} isLoaded={!iconsLoading} />
            </h2>
            <div className="section-wrapper">
                <SectionText
                    arrayText={textReq?.skillsText.skillsText as string[]}
                    sectionClass='skills-text'
                    isLoaded={iconsLoading}
                />
                <div className="section-wrapper--visual ">
                    {iconsLoading ?
                        <></>
                        // <Spinner
                        //     bg=''
                        //     size='100px'
                        //     color="#08fdd8" />
                        : <ul className="skills-icons">
                            {icons?.skillsIcons?.map((icon, index) => {
                                return (
                                    <li
                                        key={icon.id}
                                        className="skills-icons--item">
                                        <MotionContainer initial={{ x: 30 }} delay={index} duration={0.9} >
                                            <Image className="skills-icons--img" src={icon.skillsIcon} width={40} height={40} alt={icon.skillsLabel} />
                                            <span className="skills-icons--label">{icon.skillsLabel}</span>
                                        </MotionContainer >
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>

            </div>

        </section>
    )
}

export default Skills;