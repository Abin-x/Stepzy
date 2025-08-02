import React from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Header from './Components/Header/header'
import Home from './Pages/User/Home/home'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        {/* <Route path="#home" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App