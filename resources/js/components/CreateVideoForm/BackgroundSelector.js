import React, { useState } from "react";
import backgrounds from "./backgrounds";
import InputColor from "react-input-color";
import ColourPicker from "../common/ColourPicker";

const BackgroundSelector = ({
    onChange,
    currentlySelected,
    backgroundColor,
    setBackgroundColor,
    loggedin
}) => {
    return (
        <div>
            <h3>Step 1: Choose a background</h3>
            <div className="background__wrapper">
                <div className="colour">
                    <input
                        // class="hidden"
                        type="radio"
                        name="background"
                        value={"color"}
                        checked={currentlySelected === "color"}
                        onChange={(e) => onChange(e.target.value)}
                        id="color"
                    ></input>
                    <label
                        htmlFor={"color"}
                        className="colour__label"
                        style={{ backgroundColor: backgroundColor }}
                    ></label>
                    <div className="colour__picker">
                        <ColourPicker
                            value={backgroundColor}
                            onChange={setBackgroundColor}
                        />
                    </div>
                </div>
                {backgrounds.map((background, index) => {
                    if(!background.paid||loggedin){
                       return  <div key={background.thumb}>
                        <input
                            // class="hidden"
                            className="color__label"
                            type="radio"
                            name="background"
                            value={background.id}
                            checked={background.id == currentlySelected}
                            onChange={(e) => onChange(e.target.value)}
                            id={`radio__${index}`}
                            ></input>
                        <label
                            htmlFor={`radio__${index}`}
                            className="color__label"
                            >
                            <img
                                src={`/images/backgrounds/${background.thumb}`}
                                ></img>
                        </label>
                    </div>
                            }
                })}
                <div className="disabled">
                    <div className="signup__cta">Sign up for Free to get access to more backgrounds</div>
                <div className="color__label"><div></div></div>
                <div className="color__label"><div></div></div>
                <div className="color__label"><div></div></div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundSelector;
