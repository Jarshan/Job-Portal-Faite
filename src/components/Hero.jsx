import { useState, useEffect } from "react";
import "../styles/Hero.css";

const images = [
  "/Images/Pic1.jpg",
  "/Images/Pic2.jpg",
  "/Images/Pic3.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-content">
        <h1>Find your dream job now</h1>
        <h4>Sri Lanka's Trusted Job Search Portal</h4>
        <p>5 lakh + jobs for you to explore</p>
        <div className="search-bar">
          <input type="text" placeholder="Job title, keywords or company name" />


          <select>
          <option value="" disabled selected hidden>Select Experience</option> 
            <option>Fresher</option>
            <option>1 year</option>
            <option>2 years</option>
            <option>3 years</option>
            <option>5 years</option>
            <option>10 years</option>
            <option>15 years</option>
            <option>20 years</option>
            <option>25 years</option>
          </select>

          <select>
            <option>Sri Lanka</option>
            <option>(+41) Switzerland</option>
            <option>(+44) UK</option>
            <option>(+91) India</option>
            <option>(+27) South Africa</option>
          </select>
          

          
          <button>Search Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
