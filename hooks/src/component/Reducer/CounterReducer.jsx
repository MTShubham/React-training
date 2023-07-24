import React, { useReducer } from 'react'

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

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    
    // If multiple states have same properties and behaviour then we can use another useReducer for it and they can work independently
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{count.firstCounter}</p>
            
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5</button><br /><br />

            <p>{count.secondCounter}</p>

            <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment Counter2</button>
            <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement Counter2</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button><br /><br /><br />


            <p>{count2.firstCounter}</p>
            
            <button onClick={() => dispatch2({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch2({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch2({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch2({ type: "decrement", value: 5 })}>Decrement 5</button><br /><br />
        </div >
    )
}

export default CounterReducer
