import React from 'react';
import CreateVideoForm from '../CreateVideoForm';
import HowToArea from '../HowToArea';
import Logo from '../Logo';

const VideoArea = () => {
    return (
        <section className="video">
            <div className="wrapper">
            <Logo />
            <CreateVideoForm />
            </div>
        </section>
    );
};

export default VideoArea;