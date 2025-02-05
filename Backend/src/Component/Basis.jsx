import React from "react";
import { useState } from "react";
const Basis = () => {
  const [state,setState] = useState("Hi")
  return (
    <div>
      <form>
        <label>Name :  </label>
        <input type="text" id="name" name="name"></input><br></br>
        <label>Email : </label>
        <input type="email" id="email" name="email"></input><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
      <p>{state}</p>
      
    </div>
  )
}

export default Basis
