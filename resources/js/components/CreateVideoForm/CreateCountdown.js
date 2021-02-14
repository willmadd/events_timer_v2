import React, { useState } from "react";
import { CompactPicker } from "react-color";
import InputColor from "react-input-color";
import { TimeDurationInput } from "react-time-duration-input";
import MaskedInput from "react-maskedinput";
import ColourPicker from "../common/ColourPicker";

const CreateCountdown = ({
    time,
    setTime,
    textColor,
    setColor,
    toggleHideMs,
    hideMs,
    setCounterFont,
    counterFont,
}) => {
    const stringToSeconds = (e) => {
        const { value } = e.target;
        const things = value.split(":");
        const hours = Number(things[0]) * 3600;
        const minutes = Number(things[1]) * 60;
        const total = hours + minutes * 1000;
        if (total) {
            setTime(total);
        }
    };

    const fontList = ["ds-digital.ttf", "gotham-bold.ttf", "librebaskerville-regular.ttf"];

    const [fontOpen, setFontOpen] = useState(false);

    const selectFont = (font) => {
        setFontOpen(false);
        setCounterFont(font);
        localStorage.setItem("eventsTimer:video:font", font)
    };

    return (
        <div className="form__countdown">
            <h3>Step 2: Configure your timer</h3>
            <div className="form__countdown__wrapper">
                <div className="form__countdown__option">
                    <label htmlFor="">Countdown Length</label>

                    <MaskedInput
                        value={"0:01"}
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
                    <div className="colour__picker">
                        <ColourPicker value={textColor} onChange={setColor} />
                    </div>
                </div>
                <div className="form__countdown__option">
                    <label htmlFor="ms__timer" className="form__countdown__ms">
                        <p>{`Hide ms`}</p>
                    </label>
                    <input
                        id="ms__timer"
                        onChange={() => toggleHideMs()}
                        checked={hideMs}
                        type="checkbox"
                    />
                </div>
                <div className="form__countdown__option">
                    <h6>{`Font`}</h6>
                    <div className="font__selector">
                        <div
                            className="font__card font__card__title"
                            onClick={(e) => setFontOpen(!fontOpen)}
                        >
                            <h6>{counterFont.replace("-", " ").split('.')[0]}</h6>
                            <h6 className={`${counterFont.split('.')[0]}`}>{"12:43:56"}</h6>
                            <div
                                className={` font__chevron ${
                                    fontOpen ? "active" : null
                                }`}
                            ></div>
                        </div>
                        <div className="font__card__children">
                            {fontOpen && (
                                <div style={{ position: "relative" }}>
                                    {/* <div onClick={()=>setFontOpen(false)} className="font__overlay"></div> */}
                                    {fontList.map((font) => (
                                        <div
                                            className="font__card font__card__child"
                                            onClick={() => selectFont(font)}
                                        >
                                            <h6>{font.replace("-", " ").split('.')[0]}</h6>
                                            <h6 className={`${font.split('.')[0]}`}>
                                                {"12:43:56"}
                                            </h6>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Is contract ratio enough? */}
        </div>
    );
};

export default CreateCountdown;
