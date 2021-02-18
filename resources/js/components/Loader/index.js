import React from 'react';

const Loading = ({percentage}) => (
        <div className="bar">
            <span style={{width:`${percentage}%`}}></span>
        </div>
    );

export default Loading;