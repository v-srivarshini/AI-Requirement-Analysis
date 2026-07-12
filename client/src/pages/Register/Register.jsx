import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { registerUser } from "../../services/authService";

function Register() {

  const navigate = useNavigate();

const [name, setName] = useState("");
const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const data = await registerUser({
      name,
      email,
      password,
    });

    alert(data.message);

    navigate("/");
  } catch (error) {
  console.log("Register Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

  alert(
    error.response?.data?.message || "Registration Failed. Please try again."
  );
}
};
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register-container">

      <div className="register-left">
        <h1>AI Requirement Analyzer</h1>
        <p>
          Create your account to start analyzing software requirements with AI.
        </p> <br></br>
         <img
          src={reactLogo}
          alt="React Logo"
          className="login-image"
        />
      </div>

      <div className="register-right">
        <div className="register-box">

          <h2>Create Account</h2>
          <p>Fill in your details to get started.</p>

          <form onSubmit={handleRegister}>

            <div className="form-group">
              <label>Full Name</label>
             <input
  type="text"
  placeholder="Enter your full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
            </div>

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
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
             <input
  type="password"
  placeholder="Confirm password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>
            </div>

            <button type="submit">Create Account</button>
            

            <p className="login-text"><br></br>
              Already have an account?  <Link to="/">Login</Link>
            </p>

          </form>

        </div>
      </div>

    </div>
  );
}

export default Register;