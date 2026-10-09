import { useState} from 'react'

function Ustate() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("hello")

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Name:{name}</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Ustate
