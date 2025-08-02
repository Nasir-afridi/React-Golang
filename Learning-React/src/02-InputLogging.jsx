import { useEffect, useState } from "react"

const InputLogging = () => {
    const [count, setCount] = useState('')
    useEffect(() => {
        console.log(count)
    }, [count])
  return (
    <>
        <input type="text" onChange={(e) => setCount(e.target.value)}/>
        <p>{count}</p>
    </>
  )
}

export default InputLogging