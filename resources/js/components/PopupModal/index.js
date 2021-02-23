import React, {useEffect} from "react";
import './index.scss';

const PopupModal = ({message, close}) => {

useEffect(()=>{
    document.addEventListener("keydown", () => close(null), false);
    return () => {
        window.removeEventListener('keydown', () => close(null));
      };
},[])

    return (
        <div className="overlay__wrapper" onClick={() => close(null)}>
            <div className="overlay__modal">
                <p>{message}</p>
                <button type="button" onClick={() => close(null)}>
                    Ok
                </button>
            </div>
        </div>
    );
};

export default PopupModal;
