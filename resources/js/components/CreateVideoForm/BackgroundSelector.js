import React, { useState } from "react";
import backgrounds from "./backgrounds";
import InputColor from "react-input-color";
import ColourPicker from "../common/ColourPicker";
import { Link } from "react-router-dom";
import RouteID from '../../routes/routeID';

const BackgroundSelector = ({
    onChange,
    currentlySelected,
    backgroundColor,
    setBackgroundColor,
    loggedin,
    setBackgroundImageLoading
}) => {

    const setBackgroundInPreview = (value) =>{
        onChange(value);
        setBackgroundImageLoading(true);
    }

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
                        className="colour__label colourbg"
                        // style={{ backgroundColor: backgroundColor }}
                    ></label>
                    <div className="colour__picker">
                        <ColourPicker
                            value={backgroundColor}
                            onChange={setBackgroundColor}
                        />
                    </div>
                </div>
                {backgrounds.map((background, index) => {
                    if (!background.paid || loggedin) {
                        return (
                            <div key={background.thumb}>
                                <input
                                    // class="hidden"
                                    className="color__label"
                                    type="radio"
                                    name="background"
                                    value={background.id}
                                    checked={background.id == currentlySelected}
                                    onChange={(e) => setBackgroundInPreview(e.target.value)}
                                    id={`radio__${index}`}
                                ></input>
                                <label
                                    htmlFor={`radio__${index}`}
                                    className="color__label"
                                >
                                    <img
                                        src={`/images/backgrounds/${background.thumb}`}
                                    alt={`background style ${background.thumb}`}></img>
                                </label>
                            </div>
                        );
                    }
                })}
                {!loggedin && (
                    <>
                        <div className="color__label">
                            <div></div>
                        </div>
                        <div className="color__label">
                            <div></div>
                        </div>
                        <div className="color__label">
                            <div></div>
                        </div>
                        <div className="color__label">
                            <div></div>
                        </div>
                        <div className="color__label">
                            <div></div>
                        </div>
                        <div className="signup__cta">
                            <p><Link to={RouteID.signup}>Sign Up</Link> for free to get more backgrounds</p>
                        </div>
                    </>
                )}
                {/* <div className="disabled">
                </div> */}
            </div>
        </div>
    );
};

export default BackgroundSelector;
