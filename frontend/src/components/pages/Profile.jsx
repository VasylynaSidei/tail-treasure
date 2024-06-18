import React, { useState } from "react";
import "./profile.scss";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { state, dispatch } = useUserContext();
  const { user } = state;
  console.log("bonous:", user.bonusPoints);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: user?.address || "",
    region: user?.region || "",
  });

  const handleSettingsChange = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="dash-container">
      <header className="dash-header">
        <h1>{user?.firstName}</h1>
        <nav className="dash-sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CustomerSupportForm">Support</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dash-content">
        {user ? (
          <div className="profile-container">
            <ProfileHeader user={user} />
            <ProfileInformation
              isEditing={isEditing}
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <button
              className="change-settings-btn"
              onClick={handleSettingsChange}
            >
              {isEditing ? "Save Changes" : "Change Settings"}
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
            <PurchaseHistory history={user.history} />
          </div>
        ) : (
          <div className="login-link">
            <p>
              Please <Link to="/login">login</Link> to view your profile.
            </p>
          </div>
        )}
      </main>

      <footer className="dash-footer">
        <p>&copy; 2024 Tail Treasure</p>
      </footer>
    </div>
  );
};

const ProfileHeader = ({ user }) => (
  <div className="profile-info">
    <div className="profile-details">
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <p>Bonus Points: {user?.bonusPoints}</p>
    </div>
  </div>
);

const ProfileInformation = ({ isEditing, formData, handleInputChange }) => (
  <div className="profile-information">
    <h2>{formData.firstName} Profile Information</h2>
    <div className="profile-details">
      {["firstName", "lastName", "email", "address", "region"].map((field) => (
        <div key={field}>
          <label htmlFor={field}>{capitalize(field)}:</label>
          {isEditing ? (
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              value={formData[field]}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <span className="info">{formData[field]}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const PurchaseHistory = ({ history = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleHistory = showAll ? history : history?.slice(0, 4);

  return (
    <div className="purchase-history">
      <h2>Purchase History</h2>
      <ul className="purchase-list">
        {visibleHistory?.length > 0 ? (
          visibleHistory.map((purchase, index) => (
            <li key={index} className="purchase-item">
              <div className="purchase-details">
                <div>
                  <strong>Product ID:</strong> {purchase.productId}
                </div>
                <div>
                  <strong>Quantity:</strong> {purchase.quantity}
                </div>
                <div>
                  <strong>Price:</strong> {purchase.price}€
                </div>
                <div>
                  <strong>Date:</strong>{" "}
                  {new Date(purchase.date).toLocaleString()}
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>No purchase history available.</li>
        )}
      </ul>
      {history?.length > 4 && (
        <button className="see-all-btn" onClick={() => setShowAll(true)}>
          See All
        </button>
      )}
    </div>
  );
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default Profile;
