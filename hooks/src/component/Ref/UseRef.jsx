import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

// In this case, we are clearing the interval while unmouting and also on button click. Without ref we can't access interval variable outside useEffect. So useRef is helpful in this case.

const UseRef = () => {
    const [timer, setTimer] = useState(0);

    const inputRef = useRef();
    const intervalRef = useRef();

    useEffect(() => {
        axios.get('https://api.ipify.org/?format=json',
    {
        proxy: {
            protocol: 'http',
            host: '149.129.239.170',
            port: 8080,
            auth: {
                username: 'yasoob',
                password: 'p@$$w0Rd'
            }
        }
    }
)
    .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    }).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        inputRef.current.focus();
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
            <p>Timer - {timer}</p>
            <button onClick={clearInterval(intervalRef.current)}>Clear Hook timer</button>
        </div>
    )
}

export default UseRef
