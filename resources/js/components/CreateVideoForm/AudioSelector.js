import React, {useState} from 'react';
import globalAudio from './globalAudio';
const audioFiles = ['happy', 'hermit'];

const AudioSelector = ({audio, setAudio}) => {

    const [playing, setPlaying] = useState(false);
    
    const togglePlay = (file) =>{

    audioFiles.forEach(file=>globalAudio.pause(file));
    
    if(playing){
            setPlaying(false);
            globalAudio.pause(file);
        }else{
            setPlaying(file);
            globalAudio.play(file);
        }

    }
    
    return (
        <div>
            <h3>Step 4. Pick an Audio Track</h3>
            <label htmlFor={"no__audio"}>None</label>
            <input type="radio" name="audio__track" onChange={()=>setAudio(false)} id="no__audio" name="no__audio" value={false} checked={!audio}/>
            {audioFiles.map(file=>(
                <AudioButton key={file} setAudio={setAudio} audio={audio} file={file} playing={playing} togglePlay={togglePlay}/>
            ))}
        </div>
    );
};

export default AudioSelector;

const AudioButton = ({audio, setAudio, file, playing, start, togglePlay}) => {

    return <div>
        <label htmlFor={`${file}__audio`}>{file}</label>
         <input type="radio" name="audio__track" onChange={()=>setAudio(file)} id={`${file}__audio`} value={`${file}`} name={`${file}__audio`} checked={audio===file}/>
        <button type="button" onClick={()=>togglePlay(file)}>{playing===file?'stop':'play'}</button>
        </div>

}