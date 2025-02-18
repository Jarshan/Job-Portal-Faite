import React, { useState } from "react";
import "../styles/RecruiterLogin.css";
import { useNavigate } from "react-router-dom";

const RecruiterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else {
      setError("");
      console.log("Logging in:", { email, password });
    }
  };

  return (
    <div className="employer-login-container">
      <div className="welcome-section">
        <h1>Select the Perfect Candidate for Your Business</h1>
        <p>To Choose Right Jobs.</p>
        <button className="post-job-btn">Post Jobs</button>
        <button className="post-job-btn" onClick={() => navigate("/recruiter")}>Search Candidates</button> {/*  Navigate to recruiter */}
      </div>

      <div className="employer-login">
        <h2>Recruiter Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter registered email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Log in</button>
        </form>
        <p>
          <a href="/forgot-password">Forgot password?</a>
        </p>
        <p>
          Don't have an account? <a href="/create-account">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default RecruiterLogin;
