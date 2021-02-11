import axios from 'axios';
import React, {useState, useEffect} from 'react';

const SetTimeZone = () => {

    useEffect(()=>{
        axios.get('https://ipapi.co/json/')
        .then(res=>{})
    },[])

    return (
        <div>
            
        </div>
    );
};

export default SetTimeZone;