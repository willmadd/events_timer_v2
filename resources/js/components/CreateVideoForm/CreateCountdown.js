import React, { useState } from "react";
import { CompactPicker } from "react-color";
import InputColor from "react-input-color";
import { TimeDurationInput } from "react-time-duration-input";
import MaskedInput from "react-maskedinput";

const CreateCountdown = ({ time, setTime, textColor, setColor }) => {
    const stringToSeconds = (e) => {
        const { value } = e.target;
        const things = value.split(":");
        const hours = Number(things[0]) * 3600;
        const minutes = Number(things[1]) * 60;
        const total = hours + minutes * 1000;
        if (total !== NaN) {
            setTime(total);
        }
    };

    return (
        <div className="form__countdown">
            <h3>Step 2: Configure your timer</h3>
            <div className="form__countdown__wrapper">
                <div className="form__countdown__option">
                    <label
                        htmlFor="hide__timer"
                        className="form__countdown__hide"
                    >
                        <p>{`Hide timer`}</p>
                    </label>
                    <input id="hide__timer" type="checkbox" />
                </div>
                <div className="form__countdown__option">
                    <label htmlFor="">Countdown Length</label>

                    <MaskedInput
                        value={"0:10"}
                        onChange={(e) => stringToSeconds(e)}
                        mask="W:11"
                        placeholder="h:mm"
                        size="11"
                        formatCharacters={{
                            W: {
                                validate(char) {
                                    return /\d+/.test(char);
                                },
                                transform(char) {
                                    return char;
                                },
                            },
                        }}
                    />
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
