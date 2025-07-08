import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
   const [count,setCount]=useState(0);
 
const reset=()=>{
   setCount(0);
}
  return (
    <div className='counter'>
      <p id='para'>You have clicked {count} times</p>
      <button className="button" id="button" onClick={()=>setCount(count+1)}>Click Me</button>
      <button className="button" id="reset" onClick={()=>reset()}>Reset Me</button>
      <button className="button" id="decrement" onClick={()=>setCount(count-1)}>decrement Me</button>
    </div>
  )
}
export default Counter
