import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { filtersChanged } from '../../redux/features/slices/projectsFilterSlice';

const ProjectsFilter = () => {
    const { filters, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const renderFilters = (arr) => {

        if (arr.length === 0) {
            return <h4 className="projects-item--title">Фильтры не найдены</h4>
        }

        return arr.map(({ name, label }) => {
            const filterClass = classNames({ "active-filter": name === activeFilter })

            return <li
                key={name}
                id={name}
                className="projects-filters--item"
            >
                <span className={filterClass}
                    onClick={() => dispatch(filtersChanged(name))}
                >{label}</span>
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