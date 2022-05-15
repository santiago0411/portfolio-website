import React from "react";
import HeroSection from "../../HeroSection";
import {BulletPointsDisplay} from "../../BulletPointsDisplay";

function About(langData) {
    const educationData = {
        langData: langData.Education,
        componentToInsert: <BulletPointsDisplay {...langData.Education}/>
    }
    const workData = {
        langData: langData.Work,
        componentToInsert: <BulletPointsDisplay {...langData.Work}/>
    }
    const skillsData = {
        langData: langData.Skills,
        componentToInsert: <BulletPointsDisplay {...langData.Skills}/>
    }
    const languagesData = {
        langData: langData.Languages,
        componentToInsert: <BulletPointsDisplay {...langData.Languages}/>
    }
    return (
        <>
            <HeroSection {...educationData}/>
            <HeroSection {...workData}/>
            <HeroSection {...skillsData}/>
            <HeroSection {...languagesData}/>
        </>
    );
}

export default About;