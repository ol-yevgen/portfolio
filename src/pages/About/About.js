import { AnimatePresence } from 'framer-motion';
import { useLetterizeText, useStartTextAnimation } from '../../hooks/useLetterizeText';
import { useSectionText } from '../../hooks/useSectionText';
import { aboutTextData } from '../../data/textData';
import Photo from '../../assets/myPhoto.png';
import Cv from '../../data/Yevgenii_Oliinyk-Frontend_CV.pdf';

const About = () => {
    const { pageLoaded, textRef, scope } = useStartTextAnimation()

    const spelling = useLetterizeText("About me");
    const aboutText = useSectionText(aboutTextData);

    return (
        <section
            className="container section-wrapper about">
            <div className="section-wrapper--discription">
                <div
                    className={pageLoaded ? 'show' : 'hide'}
                    ref={textRef}>
                    <AnimatePresence>
                        <h2
                            className="discription-title"
                            aria-label="About me"
                            ref={scope}
                        >
                            {spelling}
                        </h2>
                    </AnimatePresence>
                </div>
                <div className="text tag-p">
                    {aboutText}
                </div>
                <a
                    className="btn about-btn"
                    href={Cv}
                    download="Yevgenii_Oliinyk-Frontend_CV"
                >Download CV</a>
            </div>
            <div className="section-wrapper--visual">
                <img className="about-photo" src={Photo} alt="" />
            </div>
        </section>
    )
}

export default About;