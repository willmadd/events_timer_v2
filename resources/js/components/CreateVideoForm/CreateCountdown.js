import React, {useState} from "react";
import { CompactPicker } from "react-color";
import InputColor from "react-input-color";
import { TimeDurationInput } from 'react-time-duration-input'

const CreateCountdown = ({ time, setTime, textColor, setColor }) => {

    return (
        <div className="form__countdown">
            <h3>Step 2: Configure your timer</h3>
            <div className="form__countdown__wrapper">
                <div className="form__countdown__option">
                    <label htmlFor="hide__timer" className="form__countdown__hide">
                    <p>{`Hide timer`}</p>
                    </label>
                        <input id="hide__timer" type="checkbox" /> 
                </div>
                <div className="form__countdown__option">
                    <label htmlFor="">
                        Countdown Length
                    </label>
                    <TimeDurationInput value={time} onChange={setTime} />
                </div>
                <div className="form__countdown__option">
                    <p>{`Countdown Color`}</p>
                    <InputColor
                        initialValue={textColor}
                        onChange={(e) => setColor(e.hex)}
                        placement="bottom"
                    />
                </div>
            </div>
            Is contract ratio enough?
        </div>
    );
};

export default CreateCountdown;
