

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import CandidateForm from './components/CandidateForm';
// import RecruiterDashboard from './components/RecruiterDashboard';
// import SignUp from './components/Signup';
// import Login from './components/Login';
// import Footer from './components/Footer';
// import JobCategory from './components/JobCategory';
// import CompanySection from './components/CompaniesSection';

// import EmployerLoginPage from './pages/Employer/EmployerLoginPage';

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";
//   const isEmployerLogin = location.pathname === "/employer-login"; 
  

//   return (
//     <div>
//       <Navbar /> {/* ✅ Navbar is always visible */}

//       {/* ✅ Employer Login page should ONLY show EmployerLogin */}
//       <div>{children}</div>

//       {!isAuthPage && !isEmployerLogin && <JobCategory />}
//       {!isAuthPage && !isEmployerLogin  && <CompanySection />}
     
//        <Footer />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/candidate" element={<CandidateForm />} />
//           <Route path="/recruiter" element={<RecruiterDashboard />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/employer-login" element={<EmployerLoginPage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterDashboard from './components/RecruiterDashboard';
import SignUp from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import JobCategory from './components/JobCategory';
import CompanySection from './components/CompaniesSection';
import EmployerLoginPage from './pages/Employer/EmployerLoginPage';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";
  const isRecruiterLogin = location.pathname === "/employer-login";
  const isRecruiterPage = location.pathname === "/recruiter"; // ✅ Hide JobCategory & CompanySection here

  return (
    <div>
      <Navbar /> {/* ✅ Navbar stays on all pages */}

      <div>{children}</div>

      {/* ✅ Hide JobCategory & CompanySection ONLY on /recruiter */}
      {!isAuthPage && !isRecruiterLogin && !isRecruiterPage && <JobCategory />}
      {!isAuthPage && !isRecruiterLogin && !isRecruiterPage && <CompanySection />}

      <Footer /> {/* ✅ Footer stays on all pages */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/recruiter" element={<RecruiterDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employer-login" element={<EmployerLoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
