import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../../assets/AIimage2.jpeg";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      alert(
        error.response?.data?.message ||
          "Registration Failed. Please try again."
      );
    }
  };

  return (
    <div className="container-fluid register-container">
      <div className="row min-vh-100 align-items-center">

        {/* Left Section */}

        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">

          <div className="register-left text-center">

            <h1>AI Requirement Analyzer</h1>

            <p>
              Create your account to start analyzing software requirements
              with AI.
            </p>

            <img
              src={reactLogo}
              alt="AI Requirement Analyzer"
              className="register-image img-fluid"
            />

          </div>

        </div>

        {/* Right Section */}

        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">

          <div className="register-box">

            <h2>Create Account</h2>

            <p>Fill in your details to get started.</p>

            <form onSubmit={handleRegister}>

              <div className="form-group mb-3">
                <label>Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </div>

              <div className="form-group mb-3">
                <label>Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="form-group mb-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

              <div className="form-group mb-3">
                <label>Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

              </div>

              <button
                type="submit"
                className="btn btn-dark w-100 py-3"
              >
                Create Account
              </button>

              <p className="login-text mt-4 text-center">
                Already have an account?{" "}
                <Link to="/">Login</Link>
              </p>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;