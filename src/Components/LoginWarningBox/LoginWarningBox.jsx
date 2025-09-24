import React from "react";
import "./LoginWarningBox.css";

const LoginWarningBox = () => {
  return (
    <div className="login-warning-box">
      <div className="login-warning-text">
        <h3>We’re here for you</h3>
        <p>Log in to get help with your reservations, account, and more.</p>
      </div>
      <button className="login-warning-button">Log in or sign up</button>
    </div>
  );
};

export default LoginWarningBox;
