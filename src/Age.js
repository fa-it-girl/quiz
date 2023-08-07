
// to understand useReducer
import React, { useReducer } from 'react'

const reducer = (state, action) => {
  if(action.type='increment'){
    return {age: state.age +1}
  }
}
const Age = () => {
  const[state, dispatch] = useReducer(reducer, {age:29})
  return (
    <div>
     <button onClick={()=> dispatch({type: 'increment', })}>increse</button>
     <h1>{state.age}</h1>
    </div>
  )
}

export default Age
