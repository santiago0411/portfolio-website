import React from "react";
import "./Card.css"
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ cardTo, cardTitle, cardDescription, buttonText }) {
    return (
        <>
            <Link to={cardTo} className="container-card">
                <div className="container-cardInfo">
                    <div className="icon">
                        <FaFire />
                    </div>
                    <h3>{cardTitle}</h3>
                    <p className="container-description">{cardDescription}</p>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                        {buttonText}
                    </Button>
                </div>
            </Link>
        </>
    )
}

export default Card;