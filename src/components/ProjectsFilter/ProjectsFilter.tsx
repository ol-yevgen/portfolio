import MotionContainer from '../ui/MotionContainer/MotionContainer';
import { IFiltersProps } from '@/types/types';
import classNames from 'classnames';

const ProjectsFilter = ({ filters, activeFilter, setActiveFilter, isLoading, setPage }: IFiltersProps) => {

    if (!isLoading) {
        if (filters.length === 0) {
            return <h4 className="projects-item--title">Filters are not found</h4>
        }
    }

    return (
        <>
            {!isLoading &&
                <ul className="projects-filters">
                    {filters.map((filter, index) => {
                        const filterClass = classNames({ "active-filter": filter === activeFilter })

                        return <li
                            key={filter}
                            id={filter}
                            className="projects-filters--item"
                        >
                            <MotionContainer initial={{ y: -20 }} delay={index} duration={1} >
                                <span className={`projects-filters--label ${filterClass}`}
                                    onClick={() => {
                                        setActiveFilter(filter) 
                                        // setPage(0)
                                    }}
                                >{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                            </MotionContainer>
                        </li>
                    })}
                </ul>
            }
        </>
    )
}

export default ProjectsFilter;