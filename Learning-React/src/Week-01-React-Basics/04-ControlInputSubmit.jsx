import React, { useState } from 'react'

const ControlInputSubmit = () => {
    const [value , setValue] = useState('')
  return (
    <>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <p>You can type: {value}</p>
        <button
         onClick={()=>{
         alert(`Hello ${value}`); 
         setValue('');
         }}>Submit</button>
    </>
  )
}

export default ControlInputSubmit