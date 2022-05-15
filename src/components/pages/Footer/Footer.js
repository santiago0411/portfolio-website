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
                        <FaLinkedin className="social-icon-link" onClick={() => window.open(langData.LinkedInTo, '_blank')}/>
                    </div>
                </div>
            </section>
        </div>
    );
};