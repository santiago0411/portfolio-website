import React from "react";
import HeroSection, {HeroSectionProps} from "../../HeroSection";
import {BulletPointsDisplay} from "../../BulletPointsDisplay";

function About(langData) {
    const educationProps = new HeroSectionProps(langData.Education);
    educationProps.SingleColumn = true;
    educationProps.FirstColumnComponent = <BulletPointsDisplay langData={langData.Education}/>;

    const workProps = new HeroSectionProps(langData.Work);
    workProps.SingleColumn = true;
    workProps.FirstColumnComponent = <BulletPointsDisplay langData={langData.Work} lightBg={true}/>;
    workProps.LightBg = true;

    const skillsProps = new HeroSectionProps(langData.Skills);
    skillsProps.SingleColumn = true;
    skillsProps.FirstColumnComponent = <BulletPointsDisplay langData={langData.Skills}/>;

    const languagesProps = new HeroSectionProps(langData.Languages);
    languagesProps.SingleColumn = true;
    languagesProps.FirstColumnComponent = <BulletPointsDisplay langData={langData.Languages} lightBg={true}/>;
    languagesProps.LightBg = true;

    return (
        <>
            <HeroSection {...educationProps}/>
            <HeroSection {...workProps}/>
            <HeroSection {...skillsProps}/>
            <HeroSection {...languagesProps}/>
        </>
    );
}

export default About;