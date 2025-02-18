import React from "react";

import RecruiterLogin from "../../components/RecruiterLogin";
import "../../styles/RecruiterLogin.css"; // Ensure styling is applied


const EmployerLoginPage = () => {

  

  return (
    
    <div>
       {/* ✅ Navbar remains visible */}
      <RecruiterLogin /> {/* ✅ Employer Login Form */}
      
    </div>
  );
};

export default EmployerLoginPage;
