import axios from "axios";
import React, { useEffect, useState } from "react";
import './myVideos.scss';
import { toHHMMSS } from "../../helpers/time";

const MyVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.get("/api/auth/recentvideos", headers).then((res) => {
            console.log(res.data.videos);
            setVideos(res.data.videos)
        });
    }, []);
    console.log('VIDEO', videos);

    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    return (
        <div className="my-video">
            <h3>My Videos</h3>
            {videos.length>0 ? (
                <ul>
                    {videos.map((video) => {
                    const date = new Date(video.created_at)
                    const minutes = "0" + date.getMinutes();
                        return <li>
                            
                            <div className="my-video__preview" style={{backgroundImage:`url(/images/backgrounds/${video.background}_480.jpg)`}}>
                            <img src={video.thumbnail} />
                            <p className={`timer ${video.font.split('.')[0]}`} style={{color:video.font_color}}>{toHHMMSS(video.duration)}</p>
                            </div>
                            <p className="created__at">{`Created on ${date.getDate()} ${months_arr[date.getMonth()]} ${date.getFullYear()} at ${date.getHours()}:${minutes.substr(-2)}`}</p>
                        </li>;
                    })}
                </ul>
            ) : (
                <p>{`You don't have any videos`}</p>
            )}
        </div>
    );
};

export default MyVideos;
