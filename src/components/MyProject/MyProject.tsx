import { useQuery } from '@tanstack/react-query';
import { gitHubIcon, linkIcon } from '../../../public/assets/icons';
import LetteringText from '../../hooks/useLetterizeText';
import { IProjectTypes } from '@/types/types';
import Image from 'next/image';
import { BASE_API } from '@/helpers/constants';
import axios from 'axios';

interface IProps extends IProjectTypes {
    isLoading: boolean
}

const MyProject = ({
    projectLabel,
    projectStack,
    projectDemo,
    projectGit,
}: IProjectTypes) => {
    const { data, isLoading: imageLoading, isError, error } = useQuery({
        queryKey: ['image', projectLabel],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/projectImage?image=${projectLabel}`)
                return data.image
            } catch (error) {
                console.log(error);
            }
        },
    })
    
    return (
        <li className="projects-item">
            {data &&
            <Image className="projects-item--img" src={data} width={40} height={40} alt={projectLabel} />}
            <div className="projects-item--description">
                <h3 className="projects-item--title" aria-label={projectLabel}>
                    <LetteringText text={projectLabel} isLoaded={!imageLoading} />
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
