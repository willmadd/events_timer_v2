import React, {useState, useEffect} from 'react';

const Logo = (props) => {
    return (
        <div className="logo">
            <h1>Events:<br/>
                Countdown
            </h1>
            <h3>{`${props.region}'s most popular webinar tool`}</h3>
            <h2>Make your online or in-person event standout with a countdown timer. Simply select a background, set-up your timer, overlay and audiotrack and download.</h2>
            <ul>
                <li>USP 1</li>
                <li>USP 2</li>
                <li>USP 3</li>
                <li>USP 4</li>
            </ul>
        </div>
    );
};

export default Logo;