import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-app">
      <h1>Counter Application</h1>
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="button-container">
        <button className="btn increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="btn decrement-btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
