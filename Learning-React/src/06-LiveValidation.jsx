import React, { useState } from 'react'

const LiveValidation = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        const value = e.target.value;
        setUser(value)

        if(value.trim() === '') {
            setError('User Name required')
        } else if(value.length < 6) {
            setError('User must be contain 6 characters')
        } else if (value.includes(' ')) {
            setError('username not contain spaces.')
        } else {
            setError('')
        }
    }
     
  return (
    <>
        <input value={user} type = "text" placeholder="Enter user Name" onChange = {handleSubmit} />
       <p style = {{color: 'red'}}>{error}</p>
    </>
  )
}

export default LiveValidation
