import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

function Profile() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
  }, []);

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
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

          </div>

          {/* Profile Form */}

          <form className="profile-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={user?.name || ""}
                readOnly
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={user?.phone || "Not Provided"}
                readOnly
              />
            </div>

            <div className="profile-actions">

              <button
                type="button"
                className="edit-btn"
               onClick={() =>
  alert("Profile update feature will be available in a future update.")

                }
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