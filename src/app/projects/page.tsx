'use client'
import { AnimatePresence, motion } from 'framer-motion';

import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import MyProject from '@/components/MyProject/MyProject';
import { IProjectTypes, IProjectsReqTypes } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { BASE_API } from '@/helpers/constants';
import axios from 'axios';
import Spinner from '@/components/ui/Spinner/Spinner';

import './projects.scss'
import { Fragment, useCallback, useEffect, useState } from 'react';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer';

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

    const renderProjectsList = useCallback((arr: IProjectTypes[]) => {
        if (isError) {
            return <h4 className="projects-item--title">No any projects</h4>
        }

        return arr.map(({ id, ...props }, index) => {
            return <Fragment key={id}>
                <MotionContainer initial={{ y: 20 }} delay={index} duration={1} >
                    <MyProject  {...props} isLoading={isLoading} />
                </MotionContainer>
            </Fragment>
                        
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.projects])

    const elements = renderProjectsList(filteredProjects as IProjectTypes[]) as JSX.Element[]

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
                {elements}
            </ul >
        </section>
    )
}

export default MyProjects