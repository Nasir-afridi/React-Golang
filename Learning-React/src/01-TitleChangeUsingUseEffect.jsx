import React, { useEffect, useState } from 'react'

const TitleChangeUsingUseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count])
  return (
    <>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}

export default TitleChangeUsingUseEffect