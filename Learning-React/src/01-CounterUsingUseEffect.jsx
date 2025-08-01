import { useEffect, useState } from 'react'

const CounterUsingUseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Component mounted', count)
    }, [count])

  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}

export default CounterUsingUseEffect;