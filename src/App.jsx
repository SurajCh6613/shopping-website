import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App