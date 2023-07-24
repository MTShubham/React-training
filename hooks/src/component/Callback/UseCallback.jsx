import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'

// without using memo and useallback all the unnecessary children components will also re-render
// useCallback is used with React.memo

const UseCallback = () => {
    const [age1, setAge1] = useState(0);
    const [age2, setAge2] = useState(0);

    const incrementAge1 = useCallback(() => {
        setAge1(age1 + 1)
    }, [age1])

    const incrementAge2 = useCallback(() => {
        setAge2(age2 + 1)
    }, [age2])

    return (
        <div>
            <Count text="Age1" age={age1} />
            <Button handleClick={incrementAge1}>Increment age1</Button>
            <Count text="Age2" age={age2} />
            <Button handleClick={incrementAge2}>Increment age2</Button>
        </div>
    )
}

export default UseCallback
