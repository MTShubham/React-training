import React from 'react'
import {useState, useEffect} from 'react'

const LogCoordinates = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [data, setData] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useeffect called");
        window.addEventListener('mousemove', logMousePosition); // This will be global and can be called anytime

        return () => {
            console.log("Unmounting");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    // Use of componentDiUpdate
    const setDataHere = ()=>{
        setData(data+1);
    }

    useEffect(()=>{
        let interval = setInterval(setDataHere, 1000);
        return () => {clearInterval(interval)}
    }, [data])

    return (
        <div>
            <p>{data}</p>
            Coordinates (x,y) - ({x},{y})
        </div>
    )
}

export default LogCoordinates
