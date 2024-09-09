import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/login' element={<Login/>} />
          <Route path='/auth/signup' element={<Signup/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
