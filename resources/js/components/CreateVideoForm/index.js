import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import { currencyConverter } from "../../helpers/currencyConversion";
import Loading from "../Loader";
import { toHHMMSS } from "../../helpers/time";
import {
    setIntervalAsync,
    clearIntervalAsync
  } from'set-interval-async/dynamic';

import BackgroundSelector from "./BackgroundSelector";
import CreateCountdown from "./CreateCountdown";
import ImageUpload from "./ImageUpload";
// import AudioSelector from "./AudioSelector";
import GuestPayment from "../GuestPayment";
// import CurrencyConverter from 'react-currency-conv';
import { settings } from "../../settings";
import AudioPlayer from "./AudioPlayer";

const CreateVideoForm = ({ loggedin, userCurrency }) => {
    const [time, setTime] = useState(60000);

    const [textColor, setTextColor] = useState(
        localStorage.getItem("eventsTimer:video:txtCol", backgroundColor) ||
            "#333333"
    );

    const [uniqueId, setId] = useState();

    const [featureImgPos, setFeatureImgPos] = useState("center");

    const [errorMsg, setErrorMsg] = useState("");

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

    const [payment, setPayment] = useState({
        currency: settings.singleVideoCost.currency,
        amount: settings.singleVideoCost.amount,
    });

    useEffect(() => {
        currencyConverter(
            userCurrency || "GBP",
            settings.singleVideoCost.currency,
            settings.singleVideoCost.amount
        ).then((res) => {
            setPayment({
                currency: userCurrency,
                amount: res,
            });
        });

        // setPayment({
        //     currency: userCurrency,
        //     amount:<CurrencyConverter from={settings.singleVideoCost.currency} to={userCurrency} value={settings.singleVideoCost.amount}/>,
        // });
    }, [userCurrency]);

    useEffect(() => {
        localStorage.setItem("eventsTimer:video:bgCol", backgroundColor);
    }, [backgroundColor]);

    useEffect(() => {
        const id = randomString(5);
        console.log(id);
        setId(id);
    }, []);

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
            counterFont,
            uniqueId
        };

        // const checkStatus = setInterval(()=>{
        //     console.log('hhhh');
        // },1000)

        // checkStatus();
        // const timer = setIntervalAsync(
        //     () => console.log('Hello'),
        //     1000
        //   )

        axios.post("/api/create", data).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                // setLoadingState("complete");
                setLoadingState("ready");
                const url = `/${data.file_name}`;
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${data.file_alias}`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            }
        })
        .catch(e=>{

            setErrorMsg('Your Video count not be created due to this error: '+e.response.data.message||e.message)
            setLoadingState("ready");
        });
        while(!promiseResolved){
            const check = async () => {
                const progress = await progressFactory();
                console.log("progress", progress);
            }
            check();
        }
    };

    // const checkVideoStatus = ()=>{
    //     console.log('check video status');
    //     axios.get(`/progress-${uniqueId}.txt`)
    //     .then(res=>{
    //         console.log(res.data);
    //     })
    // }

    const [displayPaymentModal, setDisplayPaymentModal] = useState(false);

    const [fps, setFps] = React.useState(15);

    const [audio, setAudio] = useState(null);

    const [audioPlaying, setAudioPlaying] = useState(null);

    const handlePremiumSubmit = () => {
        setDisplayPaymentModal(true);
    };
    return (
        <div className="form">
            {displayPaymentModal && (
                <GuestPayment
                    userCurrency={payment.currency}
                    amount={payment.amount.toFixed(2)}
                    setDisplayPaymentModal={setDisplayPaymentModal}
                />
            )}
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

                    <span
                        style={{
                            color: textColor,
                            fontFamily: counterFont.split(".")[0],
                        }}
                    >{`${toHHMMSS(time / 1000)}${hideMs ? "" : ":00"}`}</span>
                </div>
                {/* <div>
                    FPS: FOR TESTING ONLY
                    <input
                        value={fps}
                        name="fps"
                        onChange={(e) => setFps(e.target.value)}
                    />
                </div> */}
                <BackgroundSelector
                    currentlySelected={backgroundImage}
                    onChange={setBackgroundImage}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    featureImgPos={featureImgPos}
                    setFeatureImgPos={setFeatureImgPos}
                    loggedin={loggedin}
                />
                <div className={"step__wrapper"}>
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
                </div>
                <AudioPlayer
                    setCurrentAudio={setAudioPlaying}
                    currentAudio={audioPlaying}
                    selectedAudio={audio}
                    setSelectedAudio={setAudio}
                />
                {errorMsg && <p>{errorMsg}</p>}

                {loadingState === "ready" ? (
                    <div className="button__wrapper">
                        <button
                            className="form__download"
                            type="button"
                            onClick={() => handleSubmit("sd")}
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
                            {`${payment.amount.toFixed(2)} ${payment.currency}`}
                        </button>
                        <div className="button__explainer">
                            <h5>Free SD Countdown Timer</h5>
                            <div className="usp free">
                                <p>Free</p>
                            </div>
                            <div className="usp sd480">
                                <p>480p Standard definition</p>
                            </div>
                            <div className="usp watermark">
                                <p>Watermarked Video</p>
                            </div>
                        </div>
                        <div className="button__explainer">
                            <h5>HD Pro Countdown Timer</h5>
                            <div className="usp professional">
                                <p>Professional</p>
                            </div>
                            <div className="usp hd">
                                <p>High definition</p>
                            </div>
                            <div className="usp nowatermark">
                                <p>No Watermark</p>
                            </div>
                        </div>
                    </div>
                ) : loadingState === "loading" ? (
                    <Loading />
                ) : (
                    <h3>download</h3>
                )}
            </div>
        </div>
    );
};

export default CreateVideoForm;
