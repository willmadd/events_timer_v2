import React, {useState} from 'react';
import axios from 'axios';
import { randomString } from '../../helpers/randomstring';

const CreateVideoForm = () => {

const [time, setTime] = useState(10)

const handleSubmit = () => {
    const data={
        time,
        identifier: randomString(6)
    }
    axios.post('/api/video', data)
      .then(res =>{
        console.log(res.data);
      })
}

    return (
        <div className="form__wrapper">
            <div className="image__wrapper"></div>
            <button type="button">Upload Image</button>
            <div className="countdown">
                <h3>Countdown</h3>
                <input value={time} onChange={e=>setTime(e.target.value)}/>
                <p>seconds</p>
            </div>
            <button type="button" onClick={()=>handleSubmit()}>Download Video</button>
        </div>
    );
};

export default CreateVideoForm;