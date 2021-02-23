import axios from 'axios';
import React, {useEffect, useState} from 'react';



const MyVideos = () => {

const [videos, setVideos] = useState([]);

useEffect(()=>{
    const token = localStorage.getItem("eventcountdown:all:userToken");
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    axios.get('/api/auth/recentvideos', headers)
    .then(res=>{
        console.log(res);
    })
},[])

    return (
        <div>
            <p>My Videos!</p>
            <ul>
            {videos.map(video=>{
                <li><img src={video.thumb}/></li>
            })}
            </ul>
        </div>
    );
};

export default MyVideos;