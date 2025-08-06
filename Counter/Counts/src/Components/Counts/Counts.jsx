import React, { useState } from 'react';
import './Counts.css'; 

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };

    const sub = () => {
        setCount(count - 1);
    };

    const multiply = () => {
        setCount(count * 2);
    };

    const division = () => {
        setCount(count / 2);
    };

    return (
        <div className="counter-container">
            <h2>🚀 Counter App</h2>
            <div className="count-display">{count}</div>
            <div className="button-group">
                <button onClick={add} className="btn add">+1</button>
                <button onClick={sub} className="btn sub">-1</button>
                <button onClick={multiply} className="btn mul">×2</button>
                <button onClick={division} className="btn div">÷2</button>
            </div>
        </div>
    );
};

export default Counter;
