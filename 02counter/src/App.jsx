import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //let counter=15

  //Creating hooks
  let [counter,setCounter]=useState(20);

 const addValue=()=>{
  // console.log("value added",Math.random());
  console.log('clicked',counter);
   if(counter<20){
    setCounter(counter++);
   }
 }

 const removeValue=()=>{
  console.log('clicked',counter);
 if(counter>0){
  setCounter(counter--);
 }
 }
  return (
    <>
      <h1>Hooks</h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addValue}>Add Value:{counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove value:{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
