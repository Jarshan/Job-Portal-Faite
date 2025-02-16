import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CandidateForm from './components/CandidateForm';
import RecruiterDashboard from './components/RecruiterDashboard';
import SignUp from './components/Signup';



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
    </Routes>
  </Router>
  </div>
  )
}

export default App