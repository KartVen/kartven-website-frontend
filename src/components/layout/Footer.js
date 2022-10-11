import './FooterStyle.css'
import {FaCopyright} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <h1 className='logo-text'>KartVen</h1>
            <div className='footer-sub'>
                Copyright 2022 <FaCopyright/> KartVen
            </div>
        </footer>
    );
}

export default Footer;