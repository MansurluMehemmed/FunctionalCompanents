import React, { useState } from 'react'

export const Random = () => {
    const [state,setState] = useState(0);

    console.log(state)
    const buttonClick =()=>{
        setState(()=>Math.floor(Math.random()*10))
    }
  return (
    <div>
        <button type='button' onClick={buttonClick}></button>
        <p>{state}</p>
    </div>
  )
}
