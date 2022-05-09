import React from "react";
import './ImageButton.css';

const SIZES = ['btn--small', 'btn--medium', 'btn--large']

export const ImageButton = ({
    imgPath,
    onClick,
    buttonSize
}) => {
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize : SIZES[0];

    const backgroundImage = {
        backgroundImage: `url("${imgPath}")`,
        backgroundColor: 'transparent',
        border: 'none'
    };

    return (
        <button className={checkButtonSize}
                style={backgroundImage}
                onClick={onClick}
                />
    );
};