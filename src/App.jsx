import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CandidateForm from './components/CandidateForm';
import RecruiterDashboard from './components/RecruiterDashboard';
import SignUp from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      
  <Router>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Hero/>} />
       <Route path="/candidate" element={<CandidateForm/>} />
       <Route path="/recruiter" element={<RecruiterDashboard/>} />
       <Route path="/signup" element={<SignUp/>} />
       <Route path="/login" element={<Login/>} />
       
    </Routes>
    <Footer/>
    
  </Router>
  </div>
  )
}

export default App