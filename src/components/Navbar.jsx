import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Job Portal</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/candidate">Submit Profile</Link>
      <Link to="/recruiter">Recruiter Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
