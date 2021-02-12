import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import Loading from "../Loader";
import { toHHMMSS } from "../../helpers/time";

import BackgroundSelector from "./BackgroundSelector";
import CreateCountdown from "./CreateCountdown";
import ImageUpload from "./ImageUpload";
import AudioSelector from "./AudioSelector";
import GuestPayment from "../GuestPayment";
import CurrencyConverter from 'react-currency-conv';
import {settings} from '../../settings'


const CreateVideoForm = ({loggedin}) => {
    const [time, setTime] = useState(60000);
    
    const [textColor, setTextColor] = useState(
        localStorage.getItem("eventsTimer:video:txtCol", backgroundColor) ||
        "#333333"
        );
        console.log(settings);

    const [featureImgPos, setFeatureImgPos] = useState("center");

    const [loadingState, setLoadingState] = useState("ready");

    const [backgroundImage, setBackgroundImage] = useState("color");

    const [featureImage, setFeatureImage] = useState("");

    const [counterFont, setCounterFont] = useState(
        localStorage.getItem("eventsTimer:video:font", counterFont) ||
            "ds-digital.ttf"
    );

    const [hideMs, setHideMs] = useState(false);

    const toggleHideMs = () => setHideMs((hideMs) => !hideMs);

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
        let bg = backgroundImage;
        if (bg === "color") {
            bg = backgroundColor;
        }
        const data = {
            time: time / 1000,
            featureImage,
            textColor,
            backgroundImage: bg,
            fps,
            hideMs,
            audio,
            featureImgPos,
            counterFont
        };
        axios.post("/api/create", data).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                // setLoadingState("complete");
                setLoadingState("ready");
                const url = `/${data.file_name}`;
                console.log(url);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${data.file_alias}`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            }
        });
    };

    const [displayPaymentModal, setDisplayPaymentModal] = useState(false);

    const [fps, setFps] = React.useState(15);

    const [audio, setAudio] = useState(null);

    const handlePremiumSubmit = () =>{
        setDisplayPaymentModal(true);
    }

    return (
        <div className="form">
            {displayPaymentModal && <GuestPayment setDisplayPaymentModal={setDisplayPaymentModal}/>}
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

                    <span style={{ color: textColor, fontFamily:counterFont.split('.')[0] }}>{`${toHHMMSS(
                        time / 1000
                    )}${hideMs ? "" : ":00"}`}</span>
                </div>
                <div>
                    FPS: FOR TESTING ONLY
                    <input
                        value={fps}
                        name="fps"
                        onChange={(e) => setFps(e.target.value)}
                    />
                </div>
                <BackgroundSelector
                    currentlySelected={backgroundImage}
                    onChange={setBackgroundImage}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    featureImgPos={featureImgPos}
                    setFeatureImgPos={setFeatureImgPos}
                    loggedin={loggedin}
                    
                />
                <CreateCountdown
                    time={time}
                    setTime={setTime}
                    textColor={textColor}
                    setColor={setTextColor}
                    toggleHideMs={toggleHideMs}
                    hideMs={hideMs}
                    setCounterFont={setCounterFont}
                    counterFont={counterFont}
                />
                <ImageUpload
                    setFeatureImage={setFeatureImage}
                    setFeatureImgPos={setFeatureImgPos}
                    featureImgPos={featureImgPos}
                />
                <AudioSelector setAudio={setAudio} audio={audio} />
            </div>
            {loadingState === "ready" ? (
                <div>
                <button
                    className="form__download"
                    type="button"
                    onClick={() => handleSubmit('sd')}
                    disabled={!featureImage}
                >
                    Download Video (SD)
                </button>
                <button
                    className="form__download"
                    type="button"
                    onClick={() => handlePremiumSubmit()}
                    disabled={!featureImage}
                >
                    Download Video (HD) 
                    {/* <CurrencyConverter from={settings.singleVideoCost.currency} to={'JPY'} value={settings.singleVideoCost.ammount}/> */}
                </button>
                </div>
            ) : loadingState === "loading" ? (
                <Loading />
            ) : (
                <h3>download</h3>
            )}
        </div>
    );
};

export default CreateVideoForm;
