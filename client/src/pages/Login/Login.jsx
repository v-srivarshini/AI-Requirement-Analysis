import "./Login.css";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
function Login() {
  return (
    <div className="login-container">

      {/* Left Section */}
      <div className="login-left">


  <h1>AI Requirement Analyzer</h1>

  <p>
    Transform software requirements into intelligent insights using AI.
  </p> <br></br>
  <img
  src={reactLogo}
  alt="React Logo"
  className="login-image"
/>
</div>

    {/* Right Section */}
<div className="login-right">

  <div className="login-box">

    <h2>Welcome Back</h2>

    <p>
       Login to your account.
    </p>
    <form>

  <div className="form-group">
    <label>Email Address</label>
    <input
      type="email"
      placeholder="Enter your email"
    />
  </div>

  <div className="form-group">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your password"
    />
  </div>
<div className="form-options">
  <a href="#">Forgot Password?</a>
</div>

<button type="submit">
  Sign In
</button>

<p className="register-text">
  Don't have an account? <Link to="/register">Register</Link>
</p>
</form>

  </div>

</div>

      

    </div>
  );
}

export default Login;