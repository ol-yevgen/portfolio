import MotionContainer from '../ui/MotionContainer/MotionContainer';
import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

interface IFiltersProps {
    activeFilter: string
    filters: string[]
    setActiveFilter: Dispatch<SetStateAction<string>>
}

const ProjectsFilter = ({ filters, activeFilter, setActiveFilter }: IFiltersProps) => {

    if (filters.length === 0) {
        return <h4 className="projects-item--title">Filters are not found</h4>
    }

    return (
        <ul className="projects-filters">
            {filters.map((filter, index) => {
                const filterClass = classNames({ "active-filter": filter === activeFilter })

                return <li
                    key={filter}
                    id={filter}
                    className="projects-filters--item"
                >
                    <MotionContainer initial={{ y: -20 }} delay={index} duration={1} >
                        <span className={filterClass}
                            onClick={() => setActiveFilter(filter)}
                        >{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                    </MotionContainer>
                </li>
            })}
        </ul>
    )
}

export default ProjectsFilter;