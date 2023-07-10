import React, { useState } from "react";
import './counterInput.css';
import { reset, incrementByAmount, multiplyByAmount, divideByAmount } from "../../features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const CounterInput = () => {

    const [incrementAmount, setIncrementAmount] = useState(0);
    const dispatch = useDispatch();

    const addValue = Number(incrementAmount) || 0;
    
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <>
            <div className='inputContainer'>
                <input 
                    className='inputBox' 
                    type='text' 
                    value={incrementAmount} 
                    onChange={(e) => setIncrementAmount(e.target.value)} 
                />
            </div>
            <div className='btns'>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add By Amount</button>
                <button onClick={() => dispatch(multiplyByAmount(addValue))}>Multiply By Amount</button>
                <button onClick={() => dispatch(divideByAmount(addValue))}>Divide By Amount</button>
                <button onClick={() => resetAll()}>Reset</button>
            </div>
        </>
    )
};

export default CounterInput;