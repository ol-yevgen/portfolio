import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = ({onCloseOpenMenu}) => {
    return (
        <nav className="menu-nav">
            <NavLink
                onClick={onCloseOpenMenu}
                className="menu-nav--item"
                style={({ isActive }) => ({ color: isActive ? '#08fdd8' : null })}
                to="/about">About</NavLink>
            <NavLink
                onClick={onCloseOpenMenu}
                className="menu-nav--item"
                style={({ isActive }) => ({ color: isActive ? '#08fdd8' : '' })}
                to="/skills">My Skills</NavLink>
            <NavLink
                onClick={onCloseOpenMenu}
                className="menu-nav--item"
                style={({ isActive }) => ({ color: isActive ? '#08fdd8' : '' })}
                to="/projects">Projects</NavLink>
            <NavLink
                onClick={onCloseOpenMenu}
                className="menu-nav--item"
                style={({ isActive }) => ({ color: isActive ? '#08fdd8' : '' })}
                to="/contacts">Contacts</NavLink>
        </nav>
    )
}

export default Navbar;