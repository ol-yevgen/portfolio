import Burger from '../../components/Burger/Burger';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-tags">
                <span className="tags open-tags">html</span>
                <br />
                <span className="tags open-tags body-tags">body</span>
            </div>
            <Burger/>
        </header>
    )
}

export default Header;