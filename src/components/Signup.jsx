import { useState } from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  const [userType, setUserType] = useState("jobseeker");
  const [experience, setExperience] = useState("experienced");

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Create your Faite profile</h2>
        <p>Search & apply to jobs from Sri Lanka's No.1 Job Site</p>
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
        {userType === "jobseeker" ? (
          <>
             
            <div className="input-group">
                
              <input type="text" placeholder="Full Name" required />
              <span className="icon">👤</span>
            </div>

            

            <div className="input-group">
              <input type="email" placeholder="Email ID" required />
              <span className="icon">📧</span>
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Years of Experience" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Worked Company Name" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Position" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Key Skills" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Educational Qualification" required />
              <span className="icon">🔑</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Job Preference" required />
              <span className="icon">🔑</span>
            </div>

            

            <div className="input-group">
              <select>
                <option>(+94) Sri Lanka</option>
                <option>(+41) Switzerland</option>
                <option>(+44) UK</option>
                <option>(+91) India</option>
                <option>(+27) South Africa</option>
              </select>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Mobile Number" required />
              <span className="icon">📞</span>
            </div>

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
        ) : (
          <>
          
            <div className="input-group">
              <input type="text" placeholder="Organization Name" required />
              <span className="icon">🏢</span>
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
                <option>(+41) Switzerland</option>
                <option>(+44) UK</option>
                <option>(+91) India</option>
                <option>(+27) South Africa</option>
              </select>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Phone Number" required />
              <span className="icon">📞</span>
            </div>

            <div className="input-group">
              <select>
                <option>Title</option>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Dr.</option>
              </select>
              <input type="text" placeholder="Name of contact person" required />
              <span className="icon"></span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Job title of contact" required />
              <span className="icon">📌</span>
            </div>
          </>
        )}

        <button type="submit" className="signup-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
