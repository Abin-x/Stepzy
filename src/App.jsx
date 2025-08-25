import React from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Header from './Components/Header/header.jsx'
import MobileNavBar from './Components/MobileNavBar/MobileNavBar.jsx'
import Home from './Pages/User/Home/home'
import UserLogin from './Components/Auth/User/userLogin.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} /> */}
        <Route path="/login" element={<UserLogin />} />
      </Routes>
      <MobileNavBar />
    </div>
  )
}

export default App