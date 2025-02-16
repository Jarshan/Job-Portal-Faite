// import "../styles/Hero.css";

// const Hero = () => (
//   <div className="home">
//     <h2>Welcome to the Job Portal</h2>
//     <p>Find the best candidates and jobs here.</p>
//   </div>
// );

// export default Hero;

import { useState, useEffect } from "react";
import "../styles/Hero.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
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
        <h2>Job Happiness Starts Here</h2>
        <p>Sri Lanka's Trusted Job Search Portal</p>
        <div className="search-bar">
          <input type="text" placeholder="Job title, keywords or company name" />
          <select>
            <option>Sri Lanka</option>
          </select>
          <button>Search Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
