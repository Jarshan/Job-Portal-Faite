import { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      
      <h2>User Login</h2>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <span className="icon">👤</span>
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="icon">🔑</span>
        </div>

        <div className="remember-forgot">
          <label>
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
