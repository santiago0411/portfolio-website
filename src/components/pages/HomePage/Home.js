import React from "react";
import HeroSection, {defaultFirstColumn, HeroSectionProps} from "../../HeroSection";
import ProjectsHighlights from "../../ProjectsHighlights";
import { Contact } from "../../Contact";

function Home(langData) {
    const introProps = new HeroSectionProps(langData.HomeIntro);
    introProps.LightBg = false;
    introProps.LightText = true;
    introProps.LightTextDesc = true;
    introProps.SingleColumn = true;
    introProps.FirstColumnComponent = defaultFirstColumn(introProps);

    const contactProps = new HeroSectionProps(langData.ContactInfo);
    contactProps.SingleColumn = true;
    contactProps.FirstColumnComponent = <Contact {...langData.ContactInfo}/>;

    return (
        <>
            <HeroSection {...introProps}/>
            <ProjectsHighlights {...langData.ProjectHighlights}/>
            <HeroSection {...contactProps}/>
        </>
    );
}

export default Home;