import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  //useRef  hook to get the password input field
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*()_+[]{}~`"
  
     for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
     }
     setPassword(pass)
     
  }
 
  ,[length,numberAllowed,charAllowed,setPassword])

  //setPassword is a state setter function that is used to update the password state variable. It is used in the passwordGenerator function to set the generated password.
  //useEffect hook to call the passwordGenerator function whenever the length, numberAllowed, or charAllowed state variables change.
  // The passwordGenerator function is called whenever the length, numberAllowed, or charAllowed state variables change.
  // This is done to ensure that the password is generated with the updated values of these state variables.
  //setpassword is used to optimse this process and avoid unnecessary re-renders and used to store in the cache.

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,
    passwordGenerator])

    const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)
    },   [password])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500">
      <h1 className='text-white text-center my-3 text-4xl'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
