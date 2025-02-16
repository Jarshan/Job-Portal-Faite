import { useState } from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  const [userType, setUserType] = useState("jobseeker");
  const [experience, setExperience] = useState("experienced");

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Sign Up</h2>
        <p>as</p>
        <div className="user-type">
          <button
            className={userType === "jobseeker" ? "active" : ""}
            onClick={() => setUserType("jobseeker")}
          >
            Jobseeker
          </button>
          <button
            className={userType === "employer" ? "active" : ""}
            onClick={() => setUserType("employer")}
          >
            Employer
          </button>
        </div>
      </div>

      <form className="signup-form">
        <div className="input-group">
          <input type="text" placeholder="First Name" required />
          <span className="icon">👤</span>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Last Name" required />
          <span className="icon">👤</span>
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" required />
          <span className="icon">📧</span>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" required />
          <span className="icon">🔑</span>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Re-enter password" required />
          <span className="icon">🔑</span>
        </div>

        <div className="input-group">
          <select>
            <option>(+94) Sri Lanka</option>
          </select>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Phone Number" required />
          <span className="icon">📞</span>
        </div>

        {userType === "jobseeker" && (
          <>
            <div className="experience-selection">
              <button
                className={experience === "experienced" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setExperience("experienced");
                }}
              >
                <strong>I'm Experienced</strong>
                <p>I have work experience (excluding internships)</p>
              </button>
              <button
                className={experience === "fresher" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setExperience("fresher");
                }}
              >
                <strong>I'm a Fresher</strong>
                <p>I am a student/ Haven't worked after graduation</p>
              </button>
            </div>

            <div className="input-group file-upload">
              <label>Upload your CV</label>
              <input type="file" />
            </div>
          </>
        )}

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
