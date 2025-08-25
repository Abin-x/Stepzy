import React from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Header from './Components/Header/header.jsx'
import MobileNavBar from './Components/MobileNavBar/MobileNavBar.jsx'
import Home from './Pages/User/Home/home'
import UserLogin from './Components/Auth/User/userLogin.jsx'
import UserSignUp from './Components/Auth/User/userSignup.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} /> */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
      </Routes>
      <MobileNavBar />
    </div>
  )
}

export default App