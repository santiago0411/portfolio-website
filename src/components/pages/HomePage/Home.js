import React from "react";
import HeroSection from "../../HeroSection";
import ProjectsHighlights from "../../ProjectsHighlights";
import { Contact } from "../../Contact";

function Home(langData) {
    const contactData = {
        langData: langData.ContactInfo,
        componentToInsert: <Contact {...langData.ContactInfo}/>
    };
    return (
        <>
            <HeroSection {...{langData: langData.HomeIntro}}/>
            <ProjectsHighlights {...langData.ProjectHighlights}/>
            <HeroSection {...contactData}/>
        </>
    );
}

export default Home;