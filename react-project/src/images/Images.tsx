import React from 'react';
import './Images.css';
import blueFlower from "./img/blue_flowers.jpg";
import greenField from "./img/green_field.jpg";
import blackButterfly from "./img/black_butterfly.jpg";
import clock from "./img/clock.jpg";
import purpleStars from "./img/purple_stars.jpg";

// @ts-ignore
function Image({ imgSource }) {
    return (
        <a target="_blank" rel="noreferrer" href={imgSource}>
            <img src={imgSource} />
        </a>
    );
}

function Images() {
    return (
        <div>
            <Image imgSource={blueFlower} />
            <Image imgSource={blackButterfly} />
            <Image imgSource={clock} />
            <Image imgSource={greenField} />
            <Image imgSource={purpleStars} />
        </div>
    );
}

export default Images;