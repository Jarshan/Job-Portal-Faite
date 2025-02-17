import React from "react";

import EmployerLogin from "../../components/EmployerLogin";
import "../../styles/EmployerLogin.css"; // Ensure styling is applied

const EmployerLoginPage = () => {

  

  return (
    
    <div>
       {/* ✅ Navbar remains visible */}
      <EmployerLogin /> {/* ✅ Employer Login Form */}
    </div>
  );
};

export default EmployerLoginPage;
