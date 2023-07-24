import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    

    const increment = () => {
        // for (let i = 0; i < 5000; ++i){
        //     // setCount(count + 1);
        //     setCount(prevCount => prevCount + 1);
        // }
        setCount(count+1);
        setTimeout(() => {
            setCount(count+2);
        }, 1000);
        setCount(count+3);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            {count}
            <button onClick={increment} style={{ margin: "0 20px" }}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div >
    )
}

export default Counter
