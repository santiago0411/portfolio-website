import React from 'react';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import './HeroSection.css'
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export class HeroSectionProps {
    LightBg = false
    LightText = true
    LightTextDesc = true
    SingleColumn = false
    FirstColumnComponent = null
    SecondColumnComponent = null
    ThirdComponent = null
    ShowButton = true
    AllowZoomImage = false
    ImageOnTheLeft = false

    constructor(langData) {
        this.LangData = langData;
    }
}

export function defaultFirstColumn(props) {
    const langData = props.LangData;
    return (
        <div className='col'>
            <div className="home__hero-text-wrapper">
                { 'TopLine' in langData
                    ?
                    <div className="top-line">{langData.TopLine}</div>
                    :
                    <></>
                }
                <h1 className={props.LightText ? 'heading' : 'heading dark'}>{langData.Headline}</h1>
                <p className={props.LightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} dangerouslySetInnerHTML={{__html: langData.Description}}></p>
                { props.ShowButton
                    ?
                    <Link to={langData.ButtonRedirect}>
                        <Button buttonSize='btn--wide'
                                buttonColor='blue-grey'>{langData.ButtonLabel}</Button>
                    </Link>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export function defaultSecondColumn(props) {
    const langData = props.LangData;
    return (
        <div className='col'>
            <div className="home__hero-img-wrapper">
                { props.AllowZoomImage
                    ?
                    <Zoom>
                        <img src={langData.Img} alt={langData.Alt} className="home__hero-img"/>
                    </Zoom>
                    :
                    <img src={langData.Img} alt={langData.Alt} className="home__hero-img"/>
                }
            </div>
        </div>
    );
}

function HeroSection(props) {
    return (
        <>
        <div className={props.LightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                { props.SingleColumn && props.FirstColumnComponent !== null
                    ?
                        props.FirstColumnComponent
                    :
                    <div className="row home__hero-row"
                         style={{display: 'flex', flexDirection: props.ImageOnTheLeft ? 'row-reverse' : 'row'}}>
                        { props.FirstColumnComponent !== null
                            ?
                            props.FirstColumnComponent
                            :
                            defaultFirstColumn(props)
                        }
                        { props.SecondColumnComponent !== null
                            ?
                            props.SecondColumnComponent
                            :
                            defaultSecondColumn(props)
                        }
                        { props.ThirdComponent !== null
                            ?
                            props.ThirdComponent
                            :
                            <></>
                        }
                    </div>
                }
            </div>
        </div>
        </>
    );
}

export default HeroSection;