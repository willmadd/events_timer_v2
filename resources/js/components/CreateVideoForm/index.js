import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import Loading from "../Loader";

import BackgroundSelector from "./BackgroundSelector";
import CreateCountdown from "./CreateCountdown";
import ImageUpload from "./ImageUpload";
import AudioSelector from "./AudioSelector";

const CreateVideoForm = () => {
    const [time, setTime] = useState(2);
    const [textColor, setTextColor] = useState("#333333");

    const [loadingState, setLoadingState] = useState("ready");

    const [backgroundImage, setBackgroundImage] = useState("color");

    const [backgroundColor, setBackgroundColor] = useState({hex:"#ff4500"});

    const setColor = (e) => {
        setTextColor(e.hex);
    };

    const handleSubmit = () => {
        setLoadingState("loading");
        const data = {
            time,
            textColor,
            backgroundImage,
        };
        axios.post("/api/video", data).then((res) => {
            const { data, status } = res;
            console.log(data);
            if (status === 200) {
                // setLoadingState("complete");
                setLoadingState("ready");
                const url = `/${data.file_name}`;
                console.log(url);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${data.file_name}`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            }
        });
    };
console.log(backgroundImage)
    return (
        <div className="form">
            <div className="form__wrapper">
                <div className="form__preview" style={{backgroundColor:backgroundImage==='color'?backgroundColor.hex:'inherit'}}>
                    {backgroundImage && backgroundImage !== 'color' &&(
                        <img
                            src={`/images/backgrounds/${backgroundImage}.jpg`}
                        />
                    )}
                    <span style={{ color: textColor }}>{`${time}:00`}</span>
                </div>

                <BackgroundSelector
                    currentlySelected={backgroundImage}
                    onChange={setBackgroundImage}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    
                />
                <CreateCountdown
                    time={time}
                    setTime={setTime}
                    textColor={textColor}
                    setColor={setColor}
                />
                <ImageUpload />
                <AudioSelector />
            </div>
            {loadingState === "ready" ? (
                <button
                    className="form__download"
                    type="button"
                    onClick={() => handleSubmit()}
                >
                    Download Video
                </button>
            ) : loadingState === "loading" ? (
                <Loading />
            ) : (
                <h3>download</h3>
            )}
        </div>
    );
};

export default CreateVideoForm;
