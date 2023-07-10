import React, { useState } from "react";
import './colors.css';
import selectColor from "../../features/colorSlice";
import { changeColor, changeFontColor } from "../../features/colorSlice";
import { useDispatch, useSelector } from "react-redux";
import '../../App.css';

const Colors = () => {

    const [colorValue, setColorValue] = useState('');
    const [fontColorValue, setFontColorValue] = useState('')

    const dispatch = useDispatch();
    //const stateColor = useSelector(selectColor);

    const handleColorButton = () => {
        dispatch(changeColor(colorValue));
    }

    const handleFontColorButton = () => {
        dispatch(changeFontColor(fontColorValue))
    }

    /*const colorStyleForBox = {
            backgroundColor: `${boxColor}`
    }*/

    return (
        <>
            <h3>Enter a color</h3>
            <div className='inputContainers'>
                <div className='inputAndBtn'>
                    <input className='colorInput'
                        onChange={(e) => setColorValue(e.target.value)}
                        placeholder='Enter Color'
                    />
                    <button onClick={() => handleColorButton()}>Click To Store</button>
                </div>
                <div className='inputAndBtn'>
                    <input className='colorInput'
                        onChange={(e) => setFontColorValue(e.target.value)}
                        placeholder='Enter Font Color'
                    />
                    <button onClick={() => handleFontColorButton()}>Click To Store</button>
                </div>
                <div className='colorBox' style={{ color: `${fontColorValue}`, backgroundColor: `${colorValue}` }}>
                    <h4>Pizza!</h4>
                </div>
            </div>
        </>
    )
};

export default Colors;