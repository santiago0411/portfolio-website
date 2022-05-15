import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from "react-icons/lib";
import LangContext from "./LangProvider";

function Navbar(langData) {
    const [click, setClick] = useState(false);
    const [_, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    }

    const { lang, switchLang }  = useContext(LangContext);

    window.addEventListener("resize", showButton);

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdCardTravel className="navbar-icon"/>
                    {langData.Title}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            {langData.HomeButton}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                            {langData.ProjectsButton}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            {langData.AboutButton}
                        </Link>
                    </li>
                    <div className="flagSection">
                        <img id="btnFlag" className={lang === "es" ? "active" : ""} width="32px" height="32px" src={process.env.PUBLIC_URL + "/images/SP-Flag.ico"} onClick={() => switchLang('es')} alt="spainFlag"/>
                        <img id="btnFlag" className={lang === "en" ? "active" : ""} width="32px" height="32px" src={process.env.PUBLIC_URL + "/images/UK-Flag.ico"} onClick={() => switchLang('en')} alt="ukFlag"/>
                    </div>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </>
    )
}

export default Navbar;