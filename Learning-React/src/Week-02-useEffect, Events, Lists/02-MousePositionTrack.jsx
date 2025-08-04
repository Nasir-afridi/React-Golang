import { useState, useEffect } from "react"

const MousePositionTrack = () => {
    const [mouse, setMouse] = useState({x : 0, y : 0})

    useEffect(() => {
        const mouseHandle = (e) => {
            setMouse({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', mouseHandle)

        return () => window.removeEventListener('mousemove', mouseHandle)
    }, [])
  return (
    <>
        <h1>{mouse.x}, {mouse.y}</h1>
    </>
  )
}

export default MousePositionTrack