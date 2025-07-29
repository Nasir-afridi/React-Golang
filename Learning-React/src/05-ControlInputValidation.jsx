import React, { useState } from 'react'

const ControlInputValidation = () => {
    const [email, setEmail] = useState('')
    function check() {
        if(email === '') {
            alert("Email is required") 
            return
        }else if(!email.includes('@')) {
            alert("Invalid email format!")
            return
        }
        alert(`Form submitted from the user : ${email}`)
        setEmail('');
    }
  return (
   <>
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <p>Your email is: {email}</p>

    <button onClick={check}>Submit</button>
   </>
  )
}

export default ControlInputValidation