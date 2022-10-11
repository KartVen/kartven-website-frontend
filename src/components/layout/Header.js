import './HeaderStyle.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {PRIM_NAV_MENU} from "../../services/PathService";

const Header = () => {
    const navigator = useNavigate();

    const mobileMenuBtnSize = 30;

    const [isPrimNavOpen, setIsPrimNavOpen] = useState(false);
    const handleMenuToggle = () => setIsPrimNavOpen(state => !state);

    const [isScrolledPage, setIsScrolledPage] = useState(false);
    const handleChangeBg = () => setIsScrolledPage(window.scrollY >= 15);
    window.addEventListener("scroll", handleChangeBg);

    const handleScroll = path => {
        const id: number = path.indexOf('#');
        navigator(path);
        if(id && id !== -1){
            document
                .getElementById(path.substring(id + 1))
                .scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <header>
            <nav className={isScrolledPage ? 'nav-scroll' : ''}>
                <Link to='/' className='logo'>
                    <h1 className='logo-text'>KartVen</h1>
                </Link>

                <button
                    className="mobile-menu-btn"
                    style={{
                        color: "var(--aqua-color)",
                        width: "fit-content",
                    }}
                    aria-controls="primary-nav"
                    onClick={handleMenuToggle}
                >
                    {isPrimNavOpen ? (
                        <FaTimes size={mobileMenuBtnSize}/>
                    ) : (
                        <FaBars size={mobileMenuBtnSize}/>
                    )}
                </button>

                <div className={`primary-nav ${isPrimNavOpen ? 'active' : ''}`}>
                    <ol className='menu'>
                        {PRIM_NAV_MENU.map(({value, path}) => (
                            <li key={value}>
                                <Link to={path} onClick={() => handleScroll(path)}>
                                    <span data-hover={value}>{value}</span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </header>
    );
}

export default Header;