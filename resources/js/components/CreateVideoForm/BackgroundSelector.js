import React from "react";
import backgrounds from "./backgrounds";
import InputColor from "react-input-color";

const BackgroundSelector = ({ onChange, currentlySelected }) => {
    console.log(currentlySelected);
    return (
        <div>
            <h3>Step 1: Choose a background</h3>
            <div className="background__wrapper">
                <label>
                    <div style={{ backgroundColor: "red" }}></div>
                    <InputColor
                        initialValue={"#e8e8e8"}
                        // onChange={(e) => setColor(e)}
                        placement="right"
                    />
                    <input
                        // class="hidden"
                        type="radio"
                        name="background"
                        value={"color"}
                        checked={currentlySelected === "color"}
                        onChange={(e) => onChange(e.target.value)}
                    ></input>
                </label>
                {backgrounds.map((background) => (
                    <label key={background.thumb}>
                        <img
                            src={`/images/backgrounds/${background.thumb}`}
                        ></img>
                        <input
                            // class="hidden"
                            type="radio"
                            name="background"
                            value={background.id}
                            checked={background.id == currentlySelected}
                            onChange={(e) => onChange(e.target.value)}
                        ></input>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default BackgroundSelector;
