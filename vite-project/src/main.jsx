import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Add from './add.jsx'
import Login from './login.jsx'
import Signup from './signup.jsx'
import Check from './check.jsx'
import Home from "./home.jsx"
createRoot(document.getElementById('root')).render(
 <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/check' element={<Check/>}/>
    </Routes>
  </Router>
 </StrictMode>
)
