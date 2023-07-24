import React, { useContext } from 'react'
import { UserContext, CounterContext } from './ComponentA'

const ComponentC = () => {
  const user = useContext(UserContext);
  const countContext = useContext(CounterContext);
  return (
    <div>
        {/* <UserContext.Consumer>
            {
                user => {
                    return (user);
                }
            }
        </UserContext.Consumer> */}
        <p>{user}</p>

        <p>{countContext.countState.firstCounter}</p>
            
            <button onClick={() => countContext.countDispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => countContext.countDispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => countContext.countDispatch({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => countContext.countDispatch({ type: "decrement", value: 5 })}>Decrement 5</button><br /><br />
    </div>
  )
}

export default ComponentC
