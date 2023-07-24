import React, { useMemo, useState } from 'react'

// Here even and odd depends only on num1. If we don't use useMemo, when num1 updates, then also isEven will be called and if num2 updates then also. But it shouldn't depend upon the num2. So for that useMemo caches the result of isEven and re-renders only if num1 gets updated.

const UseMemo = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const increment1 = () => {
        setNum1(num1 + 1);
    }
    const increment2 = () => {
        setNum2(num2 + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return num1 % 2 === 0
    }, [num1])

    return (
        <div>
            <div>
                <button onClick={increment1}>Num1 - {num1}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={increment2}>Num2 - {num2}</button>
            </div>
        </div>
    )
}

export default UseMemo
