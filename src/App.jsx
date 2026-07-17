import React from 'react'
import {  Routes, Route } from 'react-router'
import Home from './pages/Home'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='min-h-screen bg-[#e9f1ee] text-slate-900'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}
export default App
