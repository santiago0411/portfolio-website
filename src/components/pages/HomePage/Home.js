import React from "react";
import HeroSection from "../../HeroSection";
import ProjectsHighlights from "../../ProjectsHighlights";
import { Contact } from "../../Contact";

function Home(langData) {
    const introData = {
        langData: langData.HomeIntro,
        componentToInsert: null
    };
    const contactData = {
        langData: langData.ContactInfo,
        componentToInsert: <Contact {...langData.ContactInfo}/>
    };
    return (
        <>
            <HeroSection {...introData}/>
            <ProjectsHighlights {...langData.ProjectHighlights}/>
            <HeroSection {...contactData}/>
        </>
    );
}

export default Home;