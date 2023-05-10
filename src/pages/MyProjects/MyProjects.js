import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import MyProject from '../../components/MyProject/MyProject';

const MyProjects = () => {

    const filteredProjectsSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.projects.projects,
        (filter, projects) => {
            if (filter === 'all') {
                return projects;
            } else {
                return projects.filter(item => item.filter === filter)
            }
        }
    )

    const filteredProjects = useSelector(filteredProjectsSelector);
    const activeFilterSelector = useSelector((state) => state.filters.activeFilter)

    const renderProjectsList = (arr) => {
        if (arr.length === 0) {
            return <h4 className="projects-item--title">No projects</h4>
        }

        return arr.map(({ id, ...props }) => {
            return <MyProject key={id} {...props} />
        })
    }

    const elements = renderProjectsList(filteredProjects)

    return (
        <section
            className="container projects">
            <ProjectsFilter />
            <AnimatePresence>
                <div
                    className='show'>
                    <ul
                        key={activeFilterSelector}
                        className="projects-items"
                    >
                        {elements}
                    </ul >
                </div>
                
            </AnimatePresence>

        </section>
    )
}

export default MyProjects