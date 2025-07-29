import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [Login, setLogin] = useState(false)
  return (
   <>
    {Login ? "Welcome back" : "please login"}

    <button onClick={() => setLogin(!Login)}>
        {Login ? "Logout" : "Login"}
    </button>
   </>
  )
}

export default ConditionalRendering