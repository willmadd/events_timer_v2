import React from 'react';
import CreateVideoForm from '../CreateVideoForm';
import HowToArea from '../HowToArea';
import VideoArea from '../VideoArea';
import USP from '../Usp/'

const HomePage = () => {
    return (
        <div>
            <VideoArea />
            <USP />
            
            <HowToArea />
        </div>
    );
};

export default HomePage;