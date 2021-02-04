import React, { useState } from "react";
import backgrounds from "./backgrounds";
import InputColor from "react-input-color";

const BackgroundSelector = ({
    onChange,
    currentlySelected,
    backgroundColor,
    setBackgroundColor,
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
                    >
                        {/* <div
                            
                            onClick={() => console.log(";clkickll")}
                        ></div> */}
                    </label>
                    <div className="colour__picker">
                        <InputColor
                            initialValue={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.hex)}
                            placement="right"
                        />
                    </div>
                </div>
                {backgrounds.map((background, index) => (
                    <div key={background.thumb}>
                        <input
                            // class="hidden"
                            type="radio"
                            name="background"
                            value={background.id}
                            checked={background.id == currentlySelected}
                            onChange={(e) => onChange(e.target.value)}
                            id={`radio__${index}`}
                        ></input>
                        <label htmlFor={`radio__${index}`}>
                            <img
                                src={`/images/backgrounds/${background.thumb}`}
                            ></img>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundSelector;
