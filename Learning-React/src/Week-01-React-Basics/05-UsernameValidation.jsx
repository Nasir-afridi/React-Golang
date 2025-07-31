import React, { useState } from 'react'

const UsernameValidation = () => {
    const [userName, setUserName] = useState('')
    function checkUser() {
        if(userName === '') {
            alert("User Name is required")
            return
        }else if(userName.length < 4) {
            alert("User Name must be atleast 4 character")
            return
        }else if(userName.includes(' ')){
            alert("User Name does not contain spaces")
            return
        }

        alert(`User Name is Valid: ${userName}`)
        setUserName('')
    }
  return (
    <>
    <br />
    <br />
    <br />
    <br />
        <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)} />
        <p>User Name is: {userName}</p>
        <button onClick={checkUser}>Submit</button>
    </>
  )
}

export default UsernameValidation