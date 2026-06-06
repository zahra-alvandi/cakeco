import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Navbar/MobileSidebar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </>
  )
}

export default App
