import React from 'react'
import Terminal from './components/Terminal'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home that containeverthing on route / */}
        <Route path='/' element={<Home/>} />
        {/* terminal on terminal route */}
        <Route path='/terminal' element={<Terminal/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App