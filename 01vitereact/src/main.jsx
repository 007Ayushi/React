import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
// const reactElement={
//   type:'a',
//   //props is an object
//   props:{
//      // href:'https://google.com',
//      href:'https://maps.app.goo.gl/toxqV46yTN8uAhQu8',
//      target:'_blank'
//   },
//   children:'click me to visit google'
// }
const anotherUser="Learning React is a joy" ;
const reactElement=React.createElement(
  'a',
  {href:'https:google.com', target:"_blank"},
  'click me to visit google',
  anotherUser // evaluated Expression
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  //<MyApp/>
  //anotherElement
  reactElement
)                                                                                                                                             