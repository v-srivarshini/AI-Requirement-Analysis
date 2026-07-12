import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { loginUser } from "../../services/authService";
function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login Successful!");

    navigate("/dashboard");
  } catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    error.response?.data?.message || "Login Failed. Please try again."
  );
}
};
const [password, setPassword] = useState("");

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

 <form onSubmit={handleLogin}>

  <div className="form-group">
    <label>Email Address</label>
   <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
  </div>

  <div className="form-group">
    <label>Password</label>
   <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
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