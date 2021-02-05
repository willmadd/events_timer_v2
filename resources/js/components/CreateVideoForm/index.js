import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import Loading from "../Loader";

import BackgroundSelector from "./BackgroundSelector";
import CreateCountdown from "./CreateCountdown";
import ImageUpload from "./ImageUpload";
import AudioSelector from "./AudioSelector";

const CreateVideoForm = () => {
    const [time, setTime] = useState(60000);

    const [textColor, setTextColor] = useState(
        localStorage.getItem("eventsTimer:video:txtCol", backgroundColor) ||
            "#333333"
    );

    const [loadingState, setLoadingState] = useState("ready");

    const [backgroundImage, setBackgroundImage] = useState("color");

    const [featureImage, setFeatureImage] = useState("");

    const [hideTimer, setHideTimer] = useState(false);

    const [featureImgPos, setFeatureImgPos] = useState("center");

    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem("eventsTimer:video:bgCol", backgroundColor) ||
            "#ff4500"
    );

    useEffect(() => {
        localStorage.setItem("eventsTimer:video:bgCol", backgroundColor);
    }, [backgroundColor]);

    useEffect(() => {
        localStorage.setItem("eventsTimer:video:txtCol", textColor);
    }, [textColor]);

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

    const [timer, setTimer] = useState(2000);

    const startTimer = () => {
        setInterval(() => {
            const newTime = timer - 100;
            setTimer(newTime);
        }, 500);
    };

    return (
        <div className="form">
            <h1 onClick={(e) => startTimer()}>{timer}</h1>
            <div className="form__wrapper">
                <div
                    className="form__preview"
                    style={{
                        backgroundColor:
                            backgroundImage === "color"
                                ? backgroundColor
                                : "inherit",
                    }}
                >
                    {featureImage && (
                        <img
                            className={`feature__image ${
                                featureImgPos === "left"
                                    ? "left"
                                    : featureImgPos === "right"
                                    ? "right"
                                    : undefined
                            }`}
                            src={featureImage}
                        />
                    )}
                    {backgroundImage && backgroundImage !== "color" && (
                        <img
                            src={`/images/backgrounds/${backgroundImage}.jpg`}
                        />
                    )}
                    {!hideTimer && (
                        <span style={{ color: textColor }}>{`${
                            time / 1000
                        }:00`}</span>
                    )}
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
                    setColor={setTextColor}
                />
                <ImageUpload
                    setFeatureImage={setFeatureImage}
                    setFeatureImgPos={setFeatureImgPos}
                    featureImgPos={featureImgPos}
                />
                {/* <AudioSelector /> */}
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
