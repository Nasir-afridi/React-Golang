import React, { useState } from 'react'

const PasswordValidation = () => {
    const [password, setPassword] = useState('')
    function checkPassword() {
        if(password === '') {
           alert("Password is required") 
           return
        }else if(password.length < 6) {
            alert("password must be at least 6 characters")
            return
        }

        alert("Password accepted")
        setPassword("");
    }
  return (
   <>
   <br />
   <br />
   <br />
   <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
        <p>Your password is: {password}</p>
        <button onClick={checkPassword}>Submit</button>
   </>
  )
}

export default PasswordValidation