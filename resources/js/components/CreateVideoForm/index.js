import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomString } from "../../helpers/randomstring";
import { currencyConverter } from "../../helpers/currencyConversion";
import Loading from "../Loader";
import { toHHMMSS } from "../../helpers/time";
import { preloadRouteComponent } from "../../routes/helpers";
import BackgroundSelector from "./BackgroundSelector";
import CreateCountdown from "./CreateCountdown";
import ImageUpload from "./ImageUpload";
// import AudioSelector from "./AudioSelector";
import GuestPayment from "../GuestPayment";
// import CurrencyConverter from 'react-currency-conv';
import { settings } from "../../settings";
import AudioPlayer from "./AudioPlayer";
import { Link, useLocation } from "react-router-dom";
import SiteLoading from "../SiteLoading";

import RouteID from "../../routes/routeID";
import SitePlaceholder from "../SitePlaceholder";

const CreateVideoForm = ({ loggedin, userCurrency }) => {
    const [time, setTime] = useState(60000);

    let location = useLocation();

    const [generatedDestination, setGeneratedDestination] = useState("");

    const [textColor, setTextColor] = useState(
        localStorage.getItem("eventsTimer:video:txtCol", backgroundColor) ||
            "#333333"
    );

    const [featureImgPos, setFeatureImgPos] = useState("center");

    const [errorMsg, setErrorMsg] = useState("");

    const [loadingState, setLoadingState] = useState("ready");

    const [backgroundImage, setBackgroundImage] = useState("color");

    const [featureImage, setFeatureImage] = useState("");

    const [counterFont, setCounterFont] = useState(
        localStorage.getItem("eventsTimer:video:font", counterFont) ||
            "ds-digital.ttf"
    );

    const toggleHideMs = () => setHideMs((hideMs) => !hideMs);

    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem("eventsTimer:video:bgCol", backgroundColor) ||
            "#E2F1ED"
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
    }, [userCurrency]);

    useEffect(() => {
        localStorage.setItem("eventsTimer:video:bgCol", backgroundColor);
    }, [backgroundColor]);

    useEffect(() => {
        localStorage.setItem("eventsTimer:video:txtCol", textColor);
    }, [textColor]);
    const [hideMs, setHideMs] = useState(false);

    const [secondsLeft, setSecondsLeft] = useState("Calculating Time");

    const handleSubmit = () => {
        let frameArr = [];
        setLoadingState("loading");
        let bg = backgroundImage;
        if (bg === "color") {
            bg = backgroundColor;
        }
        const token = localStorage.getItem("eventcountdown:all:userToken");
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
            q: 3,
        };

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post(loggedin ? "/api/auth/create" : "/api/create", data, headers)
            .then((res) => {
                const startTime = Date.now();

                const { data, status } = res;
                if (status === 200) {
                    const { id, destination } = data;
                    setTimeout(() => {
                        checkVideoStatus(
                            id,
                            destination,
                            startTime,
                            i,
                            frameArr
                        );
                    }, 1000);
                }
            })
            .catch((e) => {
                setErrorMsg(
                    "Your Video count not be created due to this error: " +
                        e.response.data.message || e.message
                );
                setLoadingState("ready");
            });
    };

    const [percentageComplete, setPercentageComplete] = useState(0);

    let i = 0;

    const checkVideoStatus = (vId, destination, startTime, i, frameArr) => {
        if (!vId) {
            console.error("a unique id could not be found");
            setErrorMsg(
                "The server did not respond. Please wait a few minutes and try again"
            );
        } else {
            axios.get(`/progress/progress-${vId}`).then((res) => {
                const frames = fps * (time / 1000);
                const dataArr = res.data
                    .split("progress=continue")
                    .filter((data) => data !== "\n");
                const lastUpdate = dataArr[dataArr.length - 1];
                const generationStatus = keyValueToJson(lastUpdate);
                const percentage =
                    (Number(generationStatus.frame) / frames) * 100;

                frameArr.push(generationStatus.frame);

                if (checkProcessingError(frameArr)) {
                    setErrorMsg(
                        "Your File could not be created. Please try again"
                    );
                    tidyUpAfterDownload(vId, destination, false);
                } else {
                    if (percentage >= 100) {
                        tidyUpAfterDownload(vId, destination, true);
                    } else {
                        setPercentageComplete(
                            isNaN(percentage) ? 0 : Math.round(percentage)
                        );
                        const now = Date.now();
                        const totalTime = Math.round(
                            (now - startTime) / 10 / percentage -
                                (now - startTime) / 1000
                        );
                        if (i > 3) {
                            setSecondsLeft(`${totalTime} Seconds remaining`);
                        }
                        i++;
                        setTimeout(() => {
                            checkVideoStatus(
                                vId,
                                destination,
                                startTime,
                                i,
                                frameArr
                            );
                        }, 2000);
                    }
                }
            });
        }
    };

    const checkProcessingError = (frameArr) => {
        if (
            frameArr.length > 4 &&
            frameArr[0] === frameArr[1] &&
            frameArr[0] === frameArr[2] &&
            frameArr[0] === frameArr[3] &&
            frameArr[0] === frameArr[4]
        ) {
            return true;
        } else {
            return false;
        }
    };

    const tidyUpAfterDownload = (vId, destination, success) => {
        setSecondsLeft(`Cleaning Up... (nearly there)`);
        const data = { vId };
        axios.post("api/cleanup", data).then((res) => {
            setPercentageComplete(0);
            success && downloadVideo(vId, destination);
            setLoadingState("ready");
            setSecondsLeft("Calculating Time Remaining");
            success && setGeneratedDestination(destination);
        });
    };

    const downloadVideo = (vId, destination) => {
        const url = `${destination}`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `countdown_timer_${vId}.mp4`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setErrorMsg(true);
    };

    const keyValueToJson = (lastUpdate) => {
        const set = lastUpdate.split("\n").filter((i) => i !== "");
        let obj = {};
        for (let i in set) {
            let pair = set[i].split("=");
            obj[pair[0]] = pair[1];
        }
        return obj;
    };

    const [fps, setFps] = React.useState(25);

    const [audio, setAudio] = useState(null);

    const [backgroundImageLoading, setBackgroundImageLoading] = useState(false);

    const [audioPlaying, setAudioPlaying] = useState(null);

    return (
        <div className="form">
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
                        <>
                            <img
                                src={`/images/backgrounds/${backgroundImage}_480.jpg`}
                                alt="background image for video"
                                onLoad={() => setBackgroundImageLoading(false)}
                                style={
                                    backgroundImageLoading
                                        ? { display: "none" }
                                        : {}
                                }
                            />
                            {backgroundImageLoading ? (
                                <SitePlaceholder />
                            ) : null}
                        </>
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
                    setBackgroundImageLoading={setBackgroundImageLoading}
                />
                <div className={"step__wrapper"}>
                    <ImageUpload
                        setFeatureImage={setFeatureImage}
                        setFeatureImgPos={setFeatureImgPos}
                        featureImgPos={featureImgPos}
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
                </div>

                <AudioPlayer
                    setCurrentAudio={setAudioPlaying}
                    currentAudio={audioPlaying}
                    selectedAudio={audio}
                    setSelectedAudio={setAudio}
                />
                {errorMsg && <p>{errorMsg}</p>}
                {generatedDestination && (
                    <p className="download__message">
                        {`Your video should start downloading soon. If it doesn't please click `}
                        <a download href={generatedDestination}>
                            here
                        </a>
                    </p>
                )}
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
                        {!featureImage ? (
                            <button
                                className="form__download pro"
                                type="button"
                                disabled={true}
                            >
                                {`Download Video (HD) ${payment.amount.toFixed(
                                    2
                                )} ${payment.currency}`}
                            </button>
                        ) : (
                            <Link
                                className="form__download pro"
                                onMouseEnter={() =>
                                    preloadRouteComponent(RouteID.buy)
                                }
                                to={{
                                    pathname: RouteID.buy,
                                    state: {
                                        background: location,
                                        userCurrency: payment.currency,
                                        amount: payment.amount.toFixed(2),
                                    },
                                }}
                            >
                                {`Download Video (HD) ${payment.amount.toFixed(
                                    2
                                )} ${payment.currency}`}
                            </Link>
                        )}

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
                    <>
                        <Loading percentage={percentageComplete} />
                        <div className="status__wrapper">
                            <p>{`${
                                percentageComplete === 0
                                    ? "Initializing Video..."
                                    : `${percentageComplete}% Complete`
                            }`}</p>
                            <p>{`${secondsLeft}`}</p>
                        </div>
                    </>
                ) : (
                    <h3>download</h3>
                )}
            </div>
        </div>
    );
};

export default CreateVideoForm;
