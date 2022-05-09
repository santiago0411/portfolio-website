import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from "react-icons/lib";
import {ImageButton} from "./ImageButton";
import LangContext from "./LangProvider";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    }

    const { switchLang, currentLangData }  = useContext(LangContext);

    window.addEventListener("resize", showButton);

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdCardTravel className="navbar-icon"/>
                    {currentLangData.Title}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            {currentLangData.HomeButton}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                            {currentLangData.ProjectsButton}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            {currentLangData.AboutButton}
                        </Link>
                    </li>
                    <li>
                        { button ? (
                            <div>
                                <ImageButton imgPath="images/Spain-Flag.ico" onClick={() => switchLang('es-ES')}/>
                                <ImageButton imgPath="images/United-Kingdom-Flag.ico" onClick={() => switchLang('en-US')}/>
                            </div>
                        ) : (
                            <div>
                                <ImageButton imgPath="images/Spain-Flag.ico" buttonSize="btn--medium"/>
                                <ImageButton imgPath="images/United-Kingdom-Flag.ico" buttonSize="btn--medium"/>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </>
    )
}

export default Navbar;