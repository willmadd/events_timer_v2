import React from 'react';
import CreateVideoForm from '../../containers/CreateVideoForm';
import HowToArea from '../HowToArea';
import Logo from '../../containers/Logo';

const VideoArea = () => {
    return (
        <section className="video">
            <img className="video__background" src="/images/homebg.svg"/>
            <div className="wrapper">
            <Logo />
            <CreateVideoForm />
            </div>
        </section>
    );
};

export default VideoArea;