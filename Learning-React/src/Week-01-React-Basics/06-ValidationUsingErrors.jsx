import React, { useState } from 'react'

const ValidationUsingErrors = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const[userError, setUserError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')

    function handleSubmit() {
        let isValid = true;

        // User Name validation.
        if(userName.trim() === '') {
            setUserError('User Name is Required')
            isValid = false
        } else if(userName.length < 4) {
            setUserError('User must be contain at least 4 characters.')
            isValid = false
        } else if(userName.includes(' ')) {
            setUserError('User Name Not Contain Spaces')
            isValid = false
        } else {
            setUserError('')
        }

        // Email validations.
        if(email.trim() === '') {
            setEmailError('Email is required')
            isValid = false
        } else if(!email.includes('@')) {
            setEmailError('Invalid Error')
            isValid = false
        }else {
            setEmailError('')
        }

        // Password validations.
         if(pass.trim() === '') {
            setPassError('Password is require')
            isValid = false
         } else if(pass.length < 6) {
            setPassError('Password contain at least 6 characters.')
            isValid = false
         } else {
            setPassError('')
         }

         if(isValid) {
            alert('All inputs are valid ✅');
            setUserName('')
            setEmail('')
            setPass('')
         }
    }
  return (
    <>
      <div style={{ padding: '30px' }}>
      <h2>Day 6 Inline Form Validation Using Errors States</h2>
        <input placeholder='Enter your user Name' type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <br />
        <br />
        <br />
        <input placeholder='Enter your Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <br />
        <br />
        <input placeholder='Enter your Password' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
        <br />
        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>
        <p style={{ color: 'red' }}>{userError}</p>
        <p style={{ color: 'red' }}>{emailError}</p>
        <p style={{ color: 'red' }}>{passError}</p>
      </div>
    </>
  )
}

export default ValidationUsingErrors