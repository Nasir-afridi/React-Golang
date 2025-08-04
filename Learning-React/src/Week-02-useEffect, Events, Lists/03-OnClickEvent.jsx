import React, { useState } from 'react'

const OnClickEvent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [texts, setTexts] = useState('');
    const [form, setForm] = useState('');
    const [disable, setDisable] = useState(false)

  return (
    <>
    {/* Task - 1 */}
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <h1>Count is : {count}</h1>

        <br />
        <br />
        <br />

     {/* Task - 2 */}
        <input placeholder='Task-2' type="text" onChange={(e) => setText(e.target.value)}/>
        <p>Text is : {text}</p>
    <br />
    <br />
    <br />


    {/* Task - 3 */}
        <input type="text" onKeyDown={(e) => setTexts(e.key)}/>
        <p>Text is : {texts}</p>

    <br />
    <br />
    <br />


    {/* Task - 4 */}
    <input type="text" placeholder='Enter your name' onChange={(e) => setForm(e.target.value)}/>
    <button onClick={() => alert(`My Name is ${form}`)}>Submit</button>

    <br />
    <br />
    <br />


    {/* Task - 5 */}
    <button disabled={disable} onClick={() => {
        console.log("hello i am nasir")
        setDisable(true)
    }}>Submit</button>

    </>
  )
}

export default OnClickEvent