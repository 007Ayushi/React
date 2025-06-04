import { useState } from "react"

function App() {
 const[color,setColor]=useState("lightblue")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}
   >
    
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

<button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >orange</button>

<button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow</button>

<button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >pink</button>
    </div>
   </div>
   </div>
   )
   }
  


export default App


// onclick method expects a function 
//it does not expect a return value
//call back is a function that is passed to another function as an argument
//it is executed after the completion of the function
//useState is a hook that allows us to use state in functional components