import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"ayushi",
    age:21
  }
  let myArray=[1,2,3,4]
  return (
    <>
    <h1 className='bg-pink-400 text-white'>Tailwind CSS and props</h1>
     <Card  username="chaiaurcode" btnText="click me"/><br/>
     <Card/><br/>
     <Card/><br/>
     <Card/><br/>      
    </>
  )
}
export default App
