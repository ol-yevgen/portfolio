import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
// import { Dispatch, SetStateAction } from 'react';

interface IFiltersProps {
    activeFilter: string
    filters: string[]
    setActiveFilter: Dispatch<SetStateAction<string>>
    // changeFilter: (filter: string) => void
}

const ProjectsFilter = ({ filters, activeFilter, setActiveFilter }: IFiltersProps) => {

    const renderFilters = (arr: string[]) => {

        // if (arr.length === 0) {
        if (arr === undefined) {
            return <h4 className="projects-item--title">Filters are not found</h4>
        }

        return arr.map(filter => {
            const filterClass = classNames({ "active-filter": filter === activeFilter })

            return <li
                key={filter}
                id={filter}
                className="projects-filters--item"
            >
                <span className={filterClass}
                    onClick={() => setActiveFilter(filter)}
                >{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            </li>
        })
    }

    const elements = renderFilters(filters);

    return (
        <ul className="projects-filters">
            {elements}
        </ul>
    )
}

export default ProjectsFilter;