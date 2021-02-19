import React from 'react';
import './_siteLoading.scss'

const SiteLoading = () => {
    return (
        <div className="siteloading__overlay">
            <div className="siteloading__modal">
                <div className="siteloading__wrapper">
                    <h1>Events:<br/>Countdown</h1>
                </div>
            </div>
            
        </div>
    );
};

export default SiteLoading;