import React from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Header from './Components/Header/header.jsx'
import MobileNavBar from './Components/MobileNavBar/MobileNavBar.jsx'
import Home from './Pages/User/Home/home'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} /> */}
      </Routes>
      <MobileNavBar />
      {/* Add other components or routes as needed */}
    </div>
  )
}

export default App