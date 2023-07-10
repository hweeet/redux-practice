import React from "react";
import './counter.css';
import { increment, decrement } from '../../features/counterSlice';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCounter } from "../../features/counterSlice";
import '../../App.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

    return (
        <section>
            <div className="numberBox">
                <div className="numberContainer">
                    {counter.count}
                </div>
            </div>
            <div className='buttonsForNum'>
                <button className='buttonStyle' onClick={() => dispatch(decrement())}>-</button>
                <button className='buttonStyle' onClick={() => dispatch(increment())}>+</button>
            </div>
        </section>
    )
}

export default Counter;