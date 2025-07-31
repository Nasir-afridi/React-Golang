import React, { useState } from 'react'

const LiveInput = () => {
    const [value, setValue] = useState('')
  return (
    <>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
        <p>You Typed: {value}</p>
    </>
  )
}

export default LiveInput