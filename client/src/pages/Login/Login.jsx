import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../../assets/AIimage2.jpeg";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);

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
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container-fluid login-container">
      <div className="row min-vh-100 align-items-center">

        {/* Left Section */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="login-left text-center">
            <h1>AI Requirement Analyzer</h1>

            <p>
              Transform software requirements into intelligent insights using AI.
            </p>

            <img
              src={reactLogo}
              alt="AI Requirement Analyzer"
              className="login-image img-fluid"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">

          <div className="login-box">

            <h2>Welcome Back</h2>

            <p>Login to your account.</p>

            <form onSubmit={handleLogin}>

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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-options mb-3">
                <a href="#">Forgot Password?</a>
              </div>

                        <button
              type="submit"
              className="btn btn-dark w-100 py-3"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
              <p className="register-text">
                Don't have an account?{" "}
                <Link to="/register">Register</Link>
              </p>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;