import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Jobenvoy.com</h2>
          <p>Level 10, East Tower World Trade Center, Colombo 1, Sri Lanka</p>
          <p>Tel: +94 112 388 655</p>
          <p>Email: info@jobenvoy.com</p>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="footer-section">
          <h3>Job Seekers</h3>
          <Link to="/register">Register Now</Link>
          <Link to="/jobs">Search Jobs</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="footer-section">
          <h3>Employers</h3>
          <Link to="/post-job">Post a Job</Link>
          <Link to="/advertise">Advertise</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025, Jobenvoy.com</p>
      </div>
    </footer>
  );
};

export default Footer;
