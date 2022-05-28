import React from "react";
import HeroSection from "../../HeroSection";

function ProjectAO(langData2) {

    const introData = {
        langData: {
            LightBg: false,
            LightText: true,
            LightTextDesc: true,
            TopLine: "",
            Headline: "AO PROJECT",
            Description: "Description",
            HideButton: true,
            ImgStart: "",
            Img: "portfolio-website/images/AO.gif",
            Alt: "",
        },
        zoomImage: true
    }

    const networkData = {
        langData: {
            LightBg: true,
            LightText: false,
            LightTextDesc: false,
            TopLine: "",
            Headline: "NETWORKING",
            Description: "The networking module is very similar to my <a href='https://github.com/santiago0411/SimpleNetworking' target='_blank' rel='noopener noreferrer'><nobr>SimpleNetworking</nobr></a> library. A message is sent by either server or client, and it is put on a thread safe queue after arriving. Periodically the main thread collects all the actions in the queue and executes them.",
            HideButton: true,
            ImgStart: "start",
            Img: "portfolio-website/images/network-flowchart.png",
            Alt: ""
        },
        zoomImage: true
    }

    return (
        <>
            <HeroSection {...introData}/>
            <HeroSection {...networkData}/>
        </>
    );
}

export default ProjectAO;