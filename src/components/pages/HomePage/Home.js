import React, {useContext} from "react";
import HeroSection from "../../HeroSection";
import LangContext from "../../LangProvider";
import ProjectsHighlights from "../../ProjectsHighlights";

function Home() {

    const data = useContext(LangContext).currentLangData;

    return (
        <>
            <HeroSection {...data.HomeIntroObj}/>
            <ProjectsHighlights/>
        </>
    );
}

export default Home;