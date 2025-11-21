import { useState } from 'react'
import './App.css'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/Signup/Signup'
import { Route, Routes } from 'react-router'
import HomePage from './Components/Homepage/HomePage'
import Chatpage from './Components/Chatpage/Chatpage'

function App() {


  return (
    <>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/chat' element={<Chatpage />}></Route>
      </Routes>
    </>
  )
}

export default App
