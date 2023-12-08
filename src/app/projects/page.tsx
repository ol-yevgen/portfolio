'use client'

import MobileFilters from '@/components/ProjectsFilter/MobileFilters/MobileFilters';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import { IProjectTypes, IProjectsReqTypes } from '@/types/types';
import MyProject from '@/components/MyProject/MyProject';
import Spinner from '@/components/ui/Spinner/Spinner';
import { useQuery } from '@tanstack/react-query';
import { BASE_API } from '@/helpers/constants';
import { useResize } from '@/hooks/useResize';
import { Fragment, useState } from 'react';
import axios from 'axios';
import './projects.scss'

const OFFSET = +(process.env.NEXT_PUBLIC_OFFSET as string) as number

const MyProjects = () => {
    const [projects, setProjects] = useState<IProjectTypes[]>([])
    const [activeFilter, setActiveFilter] = useState('all')
    const [page, setPage] = useState<number>(1)
    const windowWidth = useResize()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/projects`)
                setProjects([...projects, ...data?.projects])
                return data as IProjectsReqTypes
            } catch (error) {
                console.log(error);
            }
        },
    })

    const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.projectFilter === activeFilter)
    const projectsPagination = filteredProjects.slice(0, page * OFFSET)

    if (isError) {
        return <h4 className="projects-item--title">No any projects</h4>
    }

    return (
        <section className="container projects">
            {windowWidth.isScreenMd
                ? <ProjectsFilter
                    filters={data?.filters as string[]}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    isLoading={isLoading}
                    setPage={setPage}
                />
                : <MobileFilters
                    filters={data?.filters as string[]}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    isLoading={isLoading}
                    setPage={setPage}
                />
            }

            <ul className="projects-items">
                {projectsPagination?.map(({ id, ...props }, index) => {
                    return <Fragment key={id}>
                        <MotionContainer initial={{ y: 20 }} delay={index} duration={1} >
                            <MyProject  {...props} />
                        </MotionContainer>
                    </Fragment>

                })}
            </ul >
            {(data &&
                (projectsPagination.length > 5)) &&
                (projectsPagination.length < (data?.totalProjects as number)) &&
                <div className='projects-more'>
                    <MotionContainer initial={{ y: 20 }} delay={7} duration={1} >
                        <button
                            className='btn'
                            onClick={() => setPage(page + 1)}
                        >More</button>
                    </MotionContainer>
                </div>
            }
        </section>
    )
}

export default MyProjects