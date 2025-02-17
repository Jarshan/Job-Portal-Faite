// // import { Link } from "react-router-dom";
// // import "../styles/Navbar.css";





// // const Navbar = () => (
// //   <nav className="navbar">
// //     <div className="logo">
    
// //       <h1>FAITE.JOB</h1>
// //     </div>
// //     <div className="nav-links">
// //       <Link to="/">Home</Link>
      
// //       <Link to="/jobs">Jobs</Link>
// //       <Link to="/companies">Companies</Link>
// //       <Link to="/services"> Services</Link>
      
// //     </div>
// //     <div className="auth-links">
// //       <Link to="/signup">Sign Up</Link>
// //       <Link to="/login">Login</Link>
// //       <button className="employer-btn">+ For Employers</button>
// //     </div>
// //   </nav>
// // );

// // export default Navbar;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [dropdown, setDropdown] = useState(null);

//   const handleMouseEnter = (menu) => setDropdown(menu);
//   const handleMouseLeave = () => setDropdown(null);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>FAITE.JOB</h1>
        
//       </div>
      
//       <div className="nav-links">

//       <div className="home-tab">
//       <Link to="/">Home</Link>
//         </div>
      
//         <div 
//           className="nav-item"
//           onMouseEnter={() => handleMouseEnter("jobs")}
//           onMouseLeave={handleMouseLeave}
//         >

//           <Link to="/jobs">Jobs</Link>
//           {dropdown === "jobs" && (
//             <div className="dropdown">
//               <Link to="/jobs/full-time">Full Time</Link>
//               <Link to="/jobs/part-time">Part Time</Link>
//               <Link to="/jobs/internships">Internships</Link>
//             </div>
//           )}
//         </div>

//         <div 
//           className="nav-item"
//           onMouseEnter={() => handleMouseEnter("companies")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link to="/companies">Companies</Link>
//           {dropdown === "companies" && (
//             <div className="dropdown">
//               <Link to="/companies/top">Top Companies</Link>
//               <Link to="/companies/startups">Startups</Link>
//               <Link to="/companies/international">International</Link>
//             </div>
//           )}
//         </div>

//         <div 
//           className="nav-item"
//           onMouseEnter={() => handleMouseEnter("services")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link to="/services">Services</Link>
//           {dropdown === "services" && (
//             <div className="dropdown">
//               <Link to="/services/resume">Resume Writing</Link>
//               <Link to="/services/career-coaching">Career Coaching</Link>
//               <Link to="/services/subscriptions">Subscriptions</Link>
//             </div>
//           )}
//         </div>
        
//       </div>

//       <div className="auth-links">
//         <Link to="/signup">Register</Link>
//         <Link to="/login">Login</Link>
//         <button className="employer-btn">+ For Employers</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FAITE.<span>JOB</span></h1>
      </div>

      <div className="nav-links">
        <div className="home-tab">
          <Link to="/">Home</Link>
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("jobs")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/jobs">Jobs</Link>
          {dropdown === "jobs" && (
            <div className="dropdown">
              <Link to="/jobs/full-time">Full Time</Link>
              <Link to="/jobs/part-time">Part Time</Link>
              <Link to="/jobs/internships">Internships</Link>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("companies")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/companies">Companies</Link>
          {dropdown === "companies" && (
            <div className="dropdown">
              <Link to="/companies/top">Top Companies</Link>
              <Link to="/companies/startups">Startups</Link>
              <Link to="/companies/international">International</Link>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/services">Services</Link>
          {dropdown === "services" && (
            <div className="dropdown">
              <Link to="/services/resume">Resume Writing</Link>
              <Link to="/services/career-coaching">Career Coaching</Link>
              <Link to="/services/subscriptions">Subscriptions</Link>
            </div>
          )}
        </div>
      </div>

      <div className="auth-links">
        <Link to="/signup">Register</Link>
        <Link to="/login">Login</Link>

        <div
          className="employer-btn-container"
          onMouseEnter={() => handleMouseEnter("employer")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="employer-btn">For Recruiters</button>

          {dropdown === "employer" && (
            <div className="dropdown">
              <Link to="/buy-online">Buy Online</Link>
              <Link to="/talent-cloud">Faite Talent Cloud</Link>
              <button onClick={() => navigate("/employer-login")}>
                Recruiter Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


