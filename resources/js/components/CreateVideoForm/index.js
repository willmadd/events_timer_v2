import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import Loading from "../Loader";
import { SketchPicker } from "react-color";
import BackgroundSelector from "./BackgroundSelector";

const CreateVideoForm = () => {
    const [time, setTime] = useState(2);
    const [textColor, setTextColor] = useState("#333333");

    const [loadingState, setLoadingState] = useState("ready");

    const [backgroundImage, setBackgroundImage] = useState(1);

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

    return (
        <div className="form">
            <div className="form__wrapper">
                <div className="form__preview">
                    {backgroundImage && <img src={`/images/backgrounds/${backgroundImage}.jpg`}/>}
                    <span style={{ color: textColor }}>{`${time}:00`}</span>
                </div>
                <div className="form__buttons">
                    <button type="button">Upload Image</button>
                    <div className="form__countdown">
                        <h3>Countdown</h3>
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <p>seconds</p>
                    </div>
                    <SketchPicker
                        color={textColor}
                        onChangeComplete={(e) => setColor(e)}
                    />
                    <BackgroundSelector currentlySelected={backgroundImage} onChange={setBackgroundImage}/>
                </div>
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
