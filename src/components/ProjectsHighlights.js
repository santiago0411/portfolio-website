import React from "react";
import "./ProjectsHighlights.css";
import Card from "./Card";
import { IconContext } from "react-icons/lib";

function ProjectsHighlights(langData) {

    const mainProject = {
        cardTo: langData.ProjectOne.LinkTo,
        toNewTab: false,
        cardTitle: langData.ProjectOne.Title,
        cardDescription: langData.ProjectOne.Description,
        buttonText: langData.ProjectHighlightButtonText
    }

    const projectTwo = {
        cardTo: langData.ProjectTwo.LinkTo,
        toNewTab: true,
        cardTitle: langData.ProjectTwo.Title,
        cardDescription: langData.ProjectTwo.Description,
        buttonText: langData.ProjectHighlightButtonText
    }

    const projectThree = {
        cardTo: langData.ProjectThree.LinkTo,
        toNewTab: false,
        cardTitle: langData.ProjectThree.Title,
        cardDescription: langData.ProjectThree.Description,
        buttonText: null
    }

    return (
        <IconContext.Provider value={{ color: "#fff", size: "64" }}>
            <div className="projects__section" id="projects">
                <div className="projects__wrapper">
                    <div className="projects__heading">
                        <h1>{langData.ProjectsHighlightsTitle}</h1>
                    </div>
                    <div className="projects__container">
                        <Card {...projectTwo}/>
                        <Card {...mainProject}/>
                        <Card {...projectThree}/>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default ProjectsHighlights;