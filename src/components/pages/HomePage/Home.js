import React, {useContext} from "react";
import HeroSection from "../../HeroSection";
import LangContext from "../../LangProvider";

function Home() {

    const data = useContext(LangContext).currentLangData;

    return (
        <>
            <HeroSection {...data.HomeIntroObj}/>
        </>
    );
}

export default Home;