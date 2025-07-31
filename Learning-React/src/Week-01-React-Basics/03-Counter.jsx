import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    function addition() {
        setValue(value+1)
    }
    function subtraction() {
        setValue(value-1)
    }
    function reset() {
        setValue(0)
    }
  return (
    <>
        <h2>count is:  {value}</h2>
        <button onClick={addition}>+1</button>
        <button onClick={subtraction}>-1</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter