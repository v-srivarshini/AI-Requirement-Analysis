import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaCamera, FaUser } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile-page">

      <Sidebar />

      <div className="profile-content">

        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your personal information</p>
        </div>

        <div className="profile-card">

          {/* Avatar */}

          <div className="profile-avatar">

            <div className="avatar-circle">
              <FaUser className="user-icon" />
            </div>

            <button
              type="button"
              className="camera-btn"
            >
              <FaCamera />
            </button>

          </div>

          {/* Form */}

          <form className="profile-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>


            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Button */}

            <div className="profile-actions">

              <button
                type="button"
                className="edit-btn"
              >
                Edit Profile
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;