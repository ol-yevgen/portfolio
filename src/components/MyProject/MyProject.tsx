import { IProjectTypes } from '@/types/types';
import { gitHubIcon, linkIcon } from '../../../public/assets/icons';
import LetteringText from '../../hooks/useLetterizeText';
import Image from 'next/image';

interface IProps extends IProjectTypes {
    isLoading: boolean
}

const MyProject = ({
    projectLabel,
    projectImage,
    projectStack,
    projectDemo,
    projectGit,
    isLoading
}: IProps) => {
    
    return (
        <li className="projects-item">
            <Image className="projects-item--img" src={projectImage} width={40} height={40} alt={projectLabel} />
            <div className="projects-item--description">
                <h3 className="projects-item--title" aria-label={projectLabel}>
                    <LetteringText text={projectLabel} isLoaded={!isLoading} />

                </h3>
                <p className="projects-item--text">{projectStack}</p>
                <div className="projects-item--social">
                    <a
                        target="_blank"
                        href={projectGit}
                        className="social-link"
                        rel="noreferrer"
                        data-tooltip="Code"
                    >
                        {gitHubIcon}
                    </a>
                    <a
                        target="_blank"
                        href={projectDemo}
                        className="social-link demo"
                        rel="noreferrer"
                        data-tooltip="Demo"
                    >
                        {linkIcon}
                    </a>
                </div>
            </div>
        </li>
    )
}

export default MyProject;