import React, { useState } from 'react'

const FinalForm = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function checkValidation() {
        if(userName === '') {
            alert('User Name required')
            return
        }else if(userName.includes(' ')){
            alert("User Name does not contain spaces")
            return
        }else if(userName.length < 4) {
            alert("User name must contain 4 letters")
            return
        } else if(email  === '') {
             alert('email is required')
             return
        } else if(!email.includes('@')) {
            alert('Invaild email adress')
            return
        } else if (password  === '') {
             alert('password is required')
             return
        } else if(password.length < 6) {
            alert("password must contain 6 letters")
            return
        }

        alert('All validation are Ok.')
        setEmail('')
        setPassword('')
        setUserName('')
    }

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <h1>Final Form Week-1 Day-5</h1>
        <input placeholder='Enter your name' type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <p>you type: {userName}</p>
        <input placeholder='Enter your email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p>you type: {email}</p>
        <input placeholder='Enter your password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p>you type: {password}</p>
        <button onClick={checkValidation}>Submit</button>
    </>
  )
}

export default FinalForm;