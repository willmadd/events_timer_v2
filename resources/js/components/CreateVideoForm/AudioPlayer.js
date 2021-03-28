import React, { useState } from "react";

const audioFiles = [
    "Happy",
    "Hermit",
    "Alone",
    "Seasons",
    "Meeting",
    "Stairway",
    "Wander",
    "Ambient",
    "Cinematic",
    "Softhop",
    "Haze",
    "Enjoy",
    "Positive",
    "Clock",
    "Forever",
    "Upbeat",
    "Energy",
    "Magical",
    "Inspiring"
];

const AudioPlayer = ({
    currentAudio,
    setCurrentAudio,
    selectedAudio,
    setSelectedAudio,
}) => {
    // const [currentAudio, setCurrentAudio] = useState(null);

    return (
        <div className="audio">
            <h3>Step 4. Pick an Audio Track</h3>
            <div className={`audio__wrapper`}>
                <div className={`audio__button none ${
                            !selectedAudio ? "active" : "inactive"
                        }`}
                        onClick={(e) => setSelectedAudio(null)}>
                    <div
                        className={`audio__label `}
                        
                    >
                        <p>None</p>
                    </div>
                </div>
                {audioFiles.map((file) => (
                    <AudioSelector
                        key={file}
                        file={file}
                        setCurrentAudio={setCurrentAudio}
                        currentAudio={currentAudio}
                        selectedAudio={selectedAudio}
                        setSelectedAudio={setSelectedAudio}
                    />
                ))}
            </div>
            <audio
                src={`/mp3/${currentAudio}.mp3`}
                autoPlay={true}
                type="audio/mp3"
                controlsList="nopause"
                controls
            ></audio>
        </div>
    );
};

export default AudioPlayer;

const AudioSelector = ({
    file,
    setCurrentAudio,
    currentAudio,
    selectedAudio,
    setSelectedAudio,
}) => {
    return (
        <div
            className={`audio__button ${
                file === selectedAudio ? "active" : "inactive"
            }`}
            onClick={(e) => setSelectedAudio(file)}
        >
            <div
                className="blobs-container"
                onClick={() => setCurrentAudio(currentAudio ? null : `${file}`)}
            >
                <div
                    className={`blob ${
                        currentAudio === file ? "playing" : undefined
                    }`}
                ></div>
            </div>
            <div
                className={`audio__label `}
                
            >
                <p>{file}</p>
            </div>
        </div>
    );
};
