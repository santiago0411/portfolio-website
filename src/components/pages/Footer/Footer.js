import React from "react";
import './Footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = (langData) => {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">{langData.Copyright}</small>
                    <div className="social-icons">
                        <FaLinkedin className="social-icon-link" onClick={() => window.open(langData.LinkedInTo, '_blank', 'noopener,noreferrer')}/>
                        <FaGithub className="social-icon-link" onClick={() => window.open(langData.GithubTo, '_blank', 'noopener,noreferrer')}/>
                    </div>
                </div>
            </section>
        </div>
    );
};