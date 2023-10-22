import React, { useState } from 'react'

const Count = () => {
    const [Count,SetCount]=useState(0)
    const Increment=()=>{
        SetCount(Count+1)
    }
    const Decrement=()=>{
        SetCount(Count-1)
    }
    const reset=()=>{
        SetCount(0)
    }
    
  return (
    <div className='counter '>
        <h1 className='Header'>Hello this is assingment two. Create a counter app</h1>
        <div className='card'>
        <h1 className='counter__title'>Count : {Count}</h1>
        <button className='btn' onClick={Increment} disabled={Count===5?true:false}>+</button>
        <button className='btn' onClick={Decrement} disabled={Count===-5?true:false}>-</button>
        <button  className='btn' onClick={reset}>0</button>
        </div>

    </div>
  )
}

export default Count