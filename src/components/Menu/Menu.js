import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCloseMenu, } from '../../redux/features/slices/burgerSlice';

import Navbar from '../../layouts/Navbar/Navbar';
import logo from '../../assets/icons/Y.png'
import { telegramSvg, linkedInSvg, gitHubSvg } from '../../data/svgSocialIconsData';

import './menu.scss'

const Menu = () => {
    const burgerMenu = useSelector((state) => state.burgerMenu.burgerMenu)
    const openCloseMenuClass = burgerMenu ? 'menu menu-open' : 'menu';

    const dispatch = useDispatch()

    return (
        <>
            <menu className={openCloseMenuClass}>
                <div className="menu-logo">
                    <Link to="/"
                        className="menu-logo--link"
                        onClick={() => dispatch(openCloseMenu())}
                    >
                        <div className="menu-logo--wrapper">
                            <img className="menu-logo--icon" src={logo} width='auto' height='auto' alt="logo"></img>
                        </div>  
                        <span>Yevgenii</span>
                    </Link>
                    <span className="menu-logo--text">Web Developer</span>
                </div>
                <Navbar 
                    onCloseOpenMenu={() => dispatch(openCloseMenu())}
                />
                <ul className="menu-social">
                    <li>
                        <Link
                            className="social-link"
                            to="https://www.linkedin.com/in/yevgenii-oliinyk-0bbab0210/"
                            target="_blank"
                            name="linkedin"
                        >
                            {linkedInSvg}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="social-link"
                            to="https://github.com/ol-yevgen"
                            target="_blank"
                            name="github"
                        >
                            {gitHubSvg}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="social-link"
                            to="https://t.me/oliinyk94"
                            target="_blank"
                            name="telegram"
                        >
                            {telegramSvg}
                        </Link>
                    </li>
                </ul >
            </menu >
        </>
    )
}

export default Menu;