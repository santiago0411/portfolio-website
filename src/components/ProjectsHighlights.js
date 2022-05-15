import React from "react";
import "./ProjectsHighlights.css";
import Card from "./Card";
import { IconContext } from "react-icons/lib";

function ProjectsHighlights(langData) {
    return (
        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div className="projects__section" id="projects">
                <div className="projects__wrapper">
                    <div className="projects__heading">
                        <h1>{langData.ProjectsHighlightsTitle}</h1>
                    </div>
                    <div className="projects__container">
                        <Card {...{ cardTo: "/", cardTitle: "Project B" }} />
                        <Card {...{
                            cardTo: "/",
                            cardTitle: langData.ProjectOne.Title,
                            cardDescription: langData.ProjectOne.Description,
                            buttonText: langData.ProjectHighlightButtonText
                        }} />
                        <Card {...{ cardTo: "/", cardTitle: "Project C" }} />
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default ProjectsHighlights;