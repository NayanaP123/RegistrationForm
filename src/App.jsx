
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';



function App() {
  const [data,setdata]=useState([])

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home data={data}/>} />
      <Route path="/" element={<Register setdata={setdata}/>} />
      

    </Routes>


    <ToastContainer
position="top-center"

theme="light"

/>
      
    </>
  )
}

export default App
