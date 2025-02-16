import { Link } from "react-router-dom";
import "../styles/Navbar.css";

// const Navbar = () => (
//   <nav className="navbar">
//     <h1>Job Portal</h1>
//     <div className="nav-links">
//       <Link to="/">Home</Link>
//       <Link to="/candidate">Submit Profile</Link>
//       <Link to="/recruiter">Recruiter Dashboard</Link>
//     </div>
//   </nav>
// );

// export default Navbar;



const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
    
      <h1>FAITE.JOB</h1>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/services"> Services</Link>
      
    </div>
    <div className="auth-links">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <button className="employer-btn">+ For Employers</button>
    </div>
  </nav>
);

export default Navbar;
