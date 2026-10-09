import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'

function App() {
      const [InputValue, setInputValue] = useState("")
    return (
        <div>
        <input type='text'
        value={InputValue} 
        placeholder="Enter text here..." 
        onChange={(e)=>setInputValue(e.target.value)} />
        <h1>You Typed:{InputValue}</h1>
        </div>
    )
}

export default App
