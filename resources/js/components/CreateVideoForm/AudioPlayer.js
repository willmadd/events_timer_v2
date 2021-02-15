import React, { useState } from "react";

const audioFiles = [
    "Happy",
    "Hermit",
    "Alone",
    "Seasons",
    "Meeting",
    "Stairway",
    "Wander",
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
            <div className="audio__wrapper">
                <div className={"audio__button none"}>
                    <div
                        className={`audio__label ${
                            !selectedAudio ? "active" : "inactive"
                        }`}
                        onClick={(e) => setSelectedAudio(null)}
                    >
                        None
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
        <div className="audio__button">
            <div
                class="blobs-container"
                onClick={() => setCurrentAudio(currentAudio ? null : `${file}`)}
            >
                <div
                    class={`blob ${
                        currentAudio === file ? "playing" : undefined
                    }`}
                ></div>
            </div>
            <div
                className={`audio__label ${
                    file === selectedAudio ? "active" : "inactive"
                }`}
                onClick={(e) => setSelectedAudio(file)}
            >
                <p>{file}</p>
            </div>
        </div>
    );
};
