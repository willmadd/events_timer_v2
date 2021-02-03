import React from "react";
import { CompactPicker } from "react-color";
import InputColor from "react-input-color";

const CreateCountdown = ({ time, setTime, textColor, setColor }) => {
    return (
        <div className="form__countdown">
            <h3>Step 2: Configure your timer</h3>
            <label>
                <input type="checkbox" /> <p>Don't display a countdown</p>
            </label>
            <input value={time} onChange={(e) => setTime(e.target.value)} />
            <p>seconds</p>
            <InputColor
                initialValue={textColor}
                onChange={(e) => setColor(e)}
                placement="bottom"
            />
            Is contract ratio enough?
        </div>
    );
};

export default CreateCountdown;
