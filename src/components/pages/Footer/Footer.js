import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin} from "react-icons/fa";

export const Footer = (langData) => {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">{langData.Copyright}</small>
                    <div className="social-icons">
                        <Link className="social-icon-link" to={{ pathname: langData.LinkedInTo }} target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};