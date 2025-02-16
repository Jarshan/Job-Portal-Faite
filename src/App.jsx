import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import CandidateForm from './components/CandidateForm';



const App = () => {
  return (
    <div>
  <Router>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/candidate" element={<CandidateForm/>} />
      
    </Routes>
  </Router>
  </div>
  )
}

export default App