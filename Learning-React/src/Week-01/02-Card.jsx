import React from 'react'

const Card = (props) => {
  return (
    <>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <button onClick={props.onOurClick}>{props.buttonLabel}</button>
    </>
  )
}

export default Card