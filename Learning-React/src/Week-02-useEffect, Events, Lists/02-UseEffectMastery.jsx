import React, { useEffect, useState } from 'react'

const UseEffectMastery = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const time = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)

        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
  return (
    <>
        <p>Count : {count}</p>
        <p>Width : {width}</p>
    </>
  )
}

export default UseEffectMastery