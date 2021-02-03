import React, {useState} from 'react';

const AudioFiles = ['1', '2']

const AudioSelector = () => {



    return (
        <div>
            <h3>Step 4. Pick an Audio Track</h3>
            {AudioFiles.map(file=>(
                <AudioButton key={file} file={file}/>
            ))}
        </div>
    );
};

export default AudioSelector;

const AudioButton = ({file}) => {

    const [playing, setPlaying] = useState(false);

    let audio = new Audio(`/mp3/${file}.mp3`)

    const start = () => {
        if (audio.paused && audio.currentTime >= 0 && !audio.started) {
            setPlaying(true);
            audio.play();
            console.log("started");
        } else {
            console.log('stop');
            setPlaying(false);
            audio.pause();
            audio.currentTime=0;
        }
    }
    return <button type="button" onClick={()=>start()}>{playing?'stop':'play'}</button>

}