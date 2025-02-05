import { useState } from 'react'
import './App.css'
import Basis from './Component/Basis'
import HooksReference from './Component/HooksReference'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <HooksReference/>
      </div>
        
    </>
  )
}

export default App
