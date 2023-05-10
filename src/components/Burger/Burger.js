import { useDispatch, useSelector } from 'react-redux';
import { openCloseMenu, } from '../../redux/features/slices/burgerSlice';

import './burger.scss';

const Burger = () => {
    const burgerMenu = useSelector((state) => state.burgerMenu.burgerMenu)
    const dispatch = useDispatch()

    const burgerStick1Animation = burgerMenu ? "stick stick-1 open" : "stick stick-1 close";
    const burgerStick2Animation = burgerMenu ? "stick stick-2 open" : "stick stick-2 close"
    const burgerStick3Animation = burgerMenu ? "stick stick-3 open" : "stick stick-3 close"

    function onOpenCloseMobileMenu () {
        dispatch(openCloseMenu())
    }

    return (
        <div
            className="header-burger"
            onClick={onOpenCloseMobileMenu}
        >
            <div className={burgerStick1Animation}></div>
            <div className={burgerStick2Animation}></div>
            <div className={burgerStick3Animation}></div>
        </div>
    )
}

export default Burger;