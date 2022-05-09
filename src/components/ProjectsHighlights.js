import React, { useContext } from "react";
import "./ProjectsHighlights.css";
import Card from "./Card";
import { IconContext } from "react-icons/lib";
import LangContext from "./LangProvider";

function ProjectsHighlights() {

    const data = useContext(LangContext).currentLangData;

    return (
        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div className="projects__section" id="projects">
                <div className="projects__wrapper">
                    <h1 className="projects__heading">{data.ProjectsHighlightsTitle}</h1>
                    <div className="projects__container">
                        <Card {...{ cardTo: "/", cardTitle: "Project B" }} />
                        <Card {...{
                            cardTo: "/",
                            cardTitle: data.ProjectHighlightOne.Title,
                            cardDescription: data.ProjectHighlightOne.Description,
                            buttonText: data.ProjectHighlightButtonText
                        }} />
                        <Card {...{ cardTo: "/", cardTitle: "Project C" }} />
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default ProjectsHighlights;