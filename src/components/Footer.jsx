import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>FAITE.JOB</h2>
          <p>Colombo, Sri Lanka</p>
          <p>Tel: +94 761572763</p>
          <p>Email: jarshanjauffar@gmail.com</p>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="footer-section">
          
        

<Link to="/login">About us</Link>
<Link to="/login">Careers</Link>
<Link to="/login">Employer home </Link>
<Link to="/login">Sitemap</Link>
<Link to="/login">Credits</Link>

        </div>
        <div className="footer-section">
          
<Link to="/login">Help Center</Link>
<Link to="/login">Summons/Notices</Link>
<Link to="/login">Greivances</Link>
<Link to="/login">Report Issues</Link>


        </div>
        <div className="footer-section">
         


<Link to="/login">Privacy Policy</Link>
<Link to="/login">Terms & Conditions</Link>
<Link to="/login">Fraud Alert</Link>
<Link to="/login">Trust & Safety</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025, Mohamed Jarshan</p>
      </div>
    </footer>
  );
};

export default Footer;
