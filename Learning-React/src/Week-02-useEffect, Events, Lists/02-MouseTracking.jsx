import React, { useEffect, useState } from 'react'

const MouseTracking = () => {
    const [mouse, setMouse] = useState({x : 0, y:0})

    useEffect(() => {
        const handleMouse = (e) => {
            setMouse({x:e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", handleMouse)

        return () => window.removeEventListener("mousemove", handleMouse)
    }, [])
  return (
    <>
        <h2>X : {mouse.x}, Y : {mouse.y}</h2>
    </>
  )
}

export default MouseTracking