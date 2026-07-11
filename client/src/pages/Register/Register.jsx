import "./Register.css";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

function Register() {
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

          <form>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
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