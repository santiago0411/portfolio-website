import React from "react";
import "./Card.css"
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";

function Card({ cardTo, cardTitle, cardDescription, buttonText }) {
    return (
        <>
            <div className="container-card">
                <div className="container-cardInfo">
                    <div className="icon">
                        <FaFire />
                    </div>
                    <h3>{cardTitle}</h3>
                    <p className="container-description">{cardDescription}</p>
                    <Button buttonSize="btn--wide" buttonColor="primary" onClick={() => window.open(cardTo, '_blank', 'noopener,noreferrer')}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Card;