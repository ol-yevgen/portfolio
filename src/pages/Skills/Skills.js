import { AnimatePresence } from 'framer-motion';

import { useLetterizeText, useStartTextAnimation } from '../../hooks/useLetterizeText';
import { useStartSpallingAnimation } from '../../hooks/useSpallingAnimate';
import { useSectionText } from '../../hooks/useSectionText';

import { skillsTextData } from '../../data/textData';
import skillIconsData from '../../data/skillsIconsData'

const Skills = () => {

    const { pageLoaded, scope, textRef } = useStartTextAnimation();
    const { iconsRef, scopeSkillIcons } = useStartSpallingAnimation()

    const spelling = useLetterizeText("My Skills");
    const skillsText = useSectionText(skillsTextData);

    const skillIcons = (arr) => {
        return arr.map(icon => {
            return (
                <li className="skills-icons--item" key={icon.id}
                >
                    <img className="skills-icons--img" src={icon.icon} width='auto' height='auto' alt="javascript" />
                    <span className="skills-icons--label">{icon.title}</span>
                </li>
            )
        })
    }

    const iconsGrid = skillIcons(skillIconsData);

    return (
        <section
            className="container section-wrapper skills"
        >
            <div className="section-wrapper--discription">
                <AnimatePresence>
                    <div
                        className={pageLoaded ? 'show' : 'hide'}
                        ref={textRef}
                    >
                        <h2
                            className="discription-title"
                            aria-label="My skills"
                            ref={scope}
                        >
                            {spelling}
                        </h2>
                    </div>
                </AnimatePresence>
                
                <div className="text tag-p">
                    {skillsText}
                </div>
            </div>
            <div className="section-wrapper--visual ">
                <AnimatePresence>
                    <div className={pageLoaded ? 'show' : 'hide'}
                        ref={iconsRef}
                    >
                        <ul className="skills-icons"
                            ref={scopeSkillIcons}
                        >
                            {iconsGrid}
                        </ul>
                    </div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Skills;