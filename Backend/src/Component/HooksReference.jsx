import React,{useState} from 'react'
const HooksReference = () => {
    const[state,setState] = useState("Hi") 
  return (
    <div>
        <h1>{state}</h1>
        <button onClick ={() => setState("Welcome")}>Click</button>
    </div>
  )
}

export default HooksReference
