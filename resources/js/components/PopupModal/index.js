import React, { useEffect } from "react";
import "./index.scss";

const PopupModal = ({ message, close, proceed }) => {
    useEffect(() => {
        document.addEventListener("keydown", () => close(null), false);
        return () => {
            window.removeEventListener("keydown", () => close(null));
        };
    }, []);

    return (
        <div className="overlay__wrapper" onClick={() => close(null)}>
            <div className="overlay__modal">
                <p>{message}</p>
                <div className="overlay__buttons">
                <button className={'secondary icon__close icon'} type="button" onClick={() => close(null)}>
                    Close
                </button>
                {proceed && (
                    <button className={'primary icon__proceed icon'} type="button" onClick={() => proceed()}>
                        Proceed
                    </button>
                )}
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
