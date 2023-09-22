import React from 'react'

const ProxyPattern = () => {
    const person = {
        name: "Shubham",
        age: 20,
        nationality: "Indian"
    }
    const proxyObject = {
        get: (obj, prop) => {
            console.log({ obj, prop });
        },
        set: (obj, prop, value) => {
            console.log({ obj, prop, value });
            obj[prop] = value;
            return true;
        }
    }
    const proxyPerson = new Proxy(person, proxyObject);
    
    console.log(person);
    proxyPerson.age = 25;
    console.log(person);

    return (
        <div>

        </div>
    )
}

export default ProxyPattern
