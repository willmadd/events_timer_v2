import React from "react";
import backgrounds from "./backgrounds";

const BackgroundSelector = ({ onChange, currentlySelected }) => {
    console.log(currentlySelected)
    return (
        <div>
            <h3>Which Background do you like?</h3>
            <div>
                {backgrounds.map((background) => (
                    <label>
                        <img src={`/images/backgrounds/${background.thumb}`}></img>
                        <input
                        // class="hidden"
                            type="radio"
                            name="background"
                            value={background.id}
                            checked={background.id==currentlySelected}
                            onChange={(e)=>onChange(e.target.value)}
                        ></input>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default BackgroundSelector;
