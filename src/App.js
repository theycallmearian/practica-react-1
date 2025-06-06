import React, { useState } from 'react'
import ShowCount from './components/ShowCount/ShowCount'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const sumar = () => setCount(count + 1)
  const restar = () => setCount(count - 1)

  return (
    <div className='container'>
      <div className='contador'>
        <ShowCount count={count} />
        <div className='botones'>
          <button onClick={restar} className='btn-restar'>
            Restar
          </button>
          <button onClick={sumar} className='btn-sumar'>
            Sumar
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
