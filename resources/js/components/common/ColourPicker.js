import React, {useState} from 'react';
import { ChromePicker } from 'react-color';

const ColourPicker = ({value, onChange}) => {

const [open, toggleOpen] = useState(false);

    return (
        <div className="color__picker__wrap">
            {open&&<div className="swatch__overlay" onClick={()=>toggleOpen(!open)}></div>}
            <div className="swatch" onClick={()=>toggleOpen(!open)}>
                <div className="swatch__area" style={{'backgroundColor':value}}></div>
            </div>
            {open&&
            <div className="picker">
                <div className="picker__arrow">
                    <ChromePicker disableAlpha={true} color={value} 
                    onChange={e=>onChange(e.hex)}
                    />
                </div>
            </div>
            }
        </div>
    );
};

export default ColourPicker;