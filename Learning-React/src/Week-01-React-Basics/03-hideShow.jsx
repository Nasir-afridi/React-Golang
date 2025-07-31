import React, { useEffect, useState } from 'react'

const  Hide = () => {
    const [visible, setVisible] = useState(true)
    return(
        <>
        <button onClick={()=>setVisible(!visible)}>
            {visible ? "hide" : "show"}
        </button>

        {visible && <p>Hello</p>}
        </>
    )
}

export default Hide