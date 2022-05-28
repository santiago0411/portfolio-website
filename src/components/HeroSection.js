import React from 'react';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import './HeroSection.css'
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

class HeroSectionProps {
    LangData = {}
    SingleColumn = false
    FirstColumnComponent = null
    SecondColumnComponent = null
    ShowButton = true
    AllowZoomImage = false
}

function HeroSection({langData, componentToInsert = null, zoomImage = false}) {
    return (
        <>
        <div className={langData.LightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                { componentToInsert !== null ?
                    componentToInsert
                    :
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: langData.ImgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{langData.TopLine}</div>
                                <h1 className={langData.LightText ? 'heading' : 'heading dark'}>{langData.Headline}</h1>
                                <p className={langData.LightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} dangerouslySetInnerHTML={{__html: langData.Description}}></p>
                                {'HideButton' in langData && langData.HideButton ?
                                    <></> :
                                    <Link to={langData.ButtonRedirect}>
                                        <Button buttonSize='btn--wide'
                                                buttonColor='blue-grey'>{langData.ButtonLabel}</Button>
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                {zoomImage ?
                                    <Zoom>
                                        <img src={langData.Img} alt={langData.Alt} className="home__hero-img"/>
                                    </Zoom> :
                                    <img src={langData.Img} alt={langData.Alt} className="home__hero-img"/>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    );
}

export default HeroSection;