import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'
import Login from './components/Login'



function App() {
  return (
    <UserContextProvider>
     <h1>React</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
