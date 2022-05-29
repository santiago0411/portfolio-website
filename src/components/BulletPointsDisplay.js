import React from "react";
import './BulletPointsDisplay.css';

export const BulletPointsDisplay = ({langData, lightBg = false}) => {
    return (
        <section>
            <div className={lightBg ? "bp__heading dark-heading" : "bp__heading"}>{langData.Heading}</div>
            <div>
                <ul className="bullet-points">
                    {langData.BulletPoints.map((item, index) => <li className={lightBg ? "bullet-points dark-point" : "bullet-points"} key={index}>{item}</li>)}
                </ul>
            </div>
        </section>
    );
};