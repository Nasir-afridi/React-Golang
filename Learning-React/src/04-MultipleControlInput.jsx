import React, { useState } from 'react'

const MultipleControlInput = () => {
    const[firstName, setFirstName] = useState('')
    const[secondName, setSecondName] = useState('')
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)}/>
         <br />
         <br />
        <input value={secondName} type="text" onChange={(e) => setSecondName(e.target.value)}/>

        <p>First Name: {firstName}</p>
        <p>Last Name: {secondName}</p>
        
        <button 
        onClick=
        {() => {alert(`Hello this is me ${firstName} ${secondName}`); 
        setFirstName(''); 
        setSecondName('');
        }}>Submit</button>

    </>
  )
}

export default MultipleControlInput