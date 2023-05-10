import { gitHubSvg, linkSvg } from '../../data/svgSocialIconsData';
import { useLetterizeText } from '../../hooks/useLetterizeText';
import { motion } from 'framer-motion';

const MyProject = ({ title, image, stack, gitHubLink, projectLink }) => {
    const spelling = useLetterizeText(title)

    return (
        <motion.li
            className="projects-item"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, transform: { scale: 1.1 }, transition: { duration: 0.8, delay: 0.3 } }}
            animate={{ opacity: 1, transform: { scale: 1 }, transition: { duration: 0.8, delay: 0.3 } }}
            exit={{ opacity: 0, transform: { scale: 0.9 }, transition: { duration: 0.6 }, }}
        >
            <div className="projects-item--description">
                <h3 className="projects-item--title" aria-label={title}>
                    {spelling}
                </h3>
                <p className="projects-item--text">{stack}</p>
                <div className="projects-item--social">
                    <a
                        target="_blank"
                        href={gitHubLink}
                        className="social-link"
                        rel="noreferrer"
                    >
                        {gitHubSvg}
                    </a>
                    <a
                        target="_blank"
                        href={projectLink}
                        className="social-link"
                        rel="noreferrer"
                    >
                        {linkSvg}
                    </a>
                </div>
            </div>
        </motion.li>
    )
}

export default MyProject;