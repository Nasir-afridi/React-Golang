import React from 'react';
import { useState } from 'react'

function SummaryWeekOne() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

    function handleSubmit() {
        let isValid = true
        if(name.trim() === '') {
            setNameError('user name required')
            isValid = false
        } else if(name.length < 4) {
            setNameError('User Name contain 4 character')
            isValid = false
        } else if(name.includes(' ')) {
            setNameError('User Name does not contain spaces.')
            isValid = false
        }
        else{
            setNameError('')
        }

        if(email.trim() === '') {
            setEmailError('Email Required')
            isValid = false
        } else if(!email.includes('@')) {
            setEmailError('Uncorrect format')
            isValid = false       
        } else{
            setEmailError('')
        }

        if(isValid) {
            alert(`Welcome ${name} 
Your email is ${email}`)
            setEmail('')
            setName('')
        }
    }

  return (
    <>
      <input value={name} placeholder="Enter your Name" type="text" onChange={(e) => setName(e.target.value)}/>
        <br />
        <br />
        <br />
        <br />
      <input value={email} placeholder="Enter your Email" type="email" onChange={(e) => setEmail(e.target.value)} />
       <button onClick={handleSubmit}>Submit</button>
        <p style={{color: 'red'}}>{nameError}</p> 
       <p style={{color: 'red'}}>{emailError}</p> 
        
    </>
  )
}

export default SummaryWeekOne