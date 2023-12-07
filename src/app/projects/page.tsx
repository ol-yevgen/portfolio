'use client'

import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import { IProjectTypes, IProjectsReqTypes } from '@/types/types';
import MyProject from '@/components/MyProject/MyProject';
import Spinner from '@/components/ui/Spinner/Spinner';
import { useQuery } from '@tanstack/react-query';
import { BASE_API } from '@/helpers/constants';
import { Fragment, useState } from 'react';
import axios from 'axios';
import './projects.scss'

const MyProjects = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [projects, setProjects] = useState<IProjectTypes[]>([])

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/projects?filter=${activeFilter}`)
                setProjects(data?.projects)
                return data as IProjectsReqTypes
            } catch (error) {
                console.log(error);
            }
        },
    })

    const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.projectFilter === activeFilter)

    if (isError) {
        return <h4 className="projects-item--title">No any projects</h4>
    }

    if (isLoading) return <div className='projects-loading'>
        <Spinner
            bg=''
            size='100px'
            color="#08fdd8"
        />
    </div>

    return (
        <section
            className="container projects">
            <ProjectsFilter
                filters={data?.filters as string[]}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <ul className="projects-items">
                {filteredProjects.map(({ id, ...props }, index) => {
                    return <Fragment key={id}>
                        <MotionContainer initial={{ y: 20 }} delay={index} duration={1} >
                            <MyProject  {...props} isLoading={isLoading} />
                        </MotionContainer>
                    </Fragment>

                })}
            </ul >
        </section>
    )
}

export default MyProjects