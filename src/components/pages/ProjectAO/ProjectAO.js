import React from "react";
import './ProjectAO.css';
import HeroSection, { HeroSectionProps } from "../../HeroSection";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { PathFindingCode } from '../../../constants/PathFinding';
import { DatabaseCode } from '../../../constants/Database';
import UseWindowDimensions from "../../WindowSize";

function ProjectAO(langData) {

    const introProps = new HeroSectionProps(langData.Intro);
    introProps.AllowZoomImage = true;
    introProps.ShowButton = false;

    const networkProps = new HeroSectionProps(langData.Network);
    networkProps.AllowZoomImage = true;
    networkProps.ShowButton = false;
    networkProps.ImageOnTheLeft = true;
    networkProps.LightBg = true;
    networkProps.LightText = false;
    networkProps.LightTextDesc = false;

    const pathFindingProps = new HeroSectionProps(langData.Pathfinding);
    pathFindingProps.AllowZoomImage = true;
    pathFindingProps.ShowButton = false;
    pathFindingProps.ThirdComponent = pathFindingCodeBlock(langData.Pathfinding.CodeBlockHeading);

    const databaseProps = new HeroSectionProps(langData.Database);
    databaseProps.AllowZoomImage = true;
    databaseProps.ShowButton = false;
    databaseProps.LightBg = true;
    databaseProps.LightText = false;
    databaseProps.LightTextDesc = false;
    databaseProps.SecondColumnComponent = databaseCodeBlock();

    return (
        <>
            <HeroSection {...introProps}/>
            <HeroSection {...networkProps}/>
            <HeroSection {...pathFindingProps}/>
            <HeroSection {...databaseProps}/>
        </>
    );
}

export default ProjectAO;

function pathFindingCodeBlock(heading) {
    return (
        <>
        <h1 style={{marginRight: 'auto', marginLeft: 'auto', marginBottom: '50px', marginTop: '10px'}}>{heading}</h1>
        <CodeBlock
        className="codeBlock"
        text={PathFindingCode}
        language="cpp"
        showLineNumbers={true}
        theme={vs2015}
        customStyle={{
            display: 'flex',
            height: '50vh',
            width: '100%',
            overflow: 'scroll',
        }}
        />
        </>
    );
}

function databaseCodeBlock() {
    const windowWidth = UseWindowDimensions().Width;
    return (
        <CodeBlock
            className="codeBlock"
            text={DatabaseCode}
            language="cpp"
            showLineNumbers={true}
            theme={vs2015}
            customStyle={{
                display: 'flex',
                height: '50vh',
                width: windowWidth > 768 ? '50%' : '100%',
                overflow: 'scroll'
            }}
        />
    );
}