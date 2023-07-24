import React, { useReducer, useState } from 'react'
import ComponentB from './ComponentB'

// using object, we can handle multiple states
const initialState = {
    firstCounter: 0,
    secondCounter: 1
};

// using action as object, we can pass additional data into the action
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return { ...state, firstCounter: state.firstCounter + action.value };
        case "decrement": return { ...state, firstCounter: state.firstCounter - action.value };
        case "increment2": return { ...state, secondCounter: state.secondCounter + action.value };
        case "decrement2": return { ...state, secondCounter: state.secondCounter - action.value };
        case "reset": return initialState;
        default: return state;
    }
}

export const UserContext = React.createContext();
export const CounterContext = React.createContext();

const ComponentA = () => {
    // useState with useContext
    const [name, setName] = useState("Shubham");

    // useReducer with useContext
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <UserContext.Provider value={name}>
                <CounterContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                    <ComponentB />
                </CounterContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA
