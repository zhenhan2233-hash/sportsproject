import React from "react";

function Settings({ darkMode = false, setDarkMode = () => {} }) {
  const pageStyle = {
    backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
    color: darkMode ? "#f0f0f0" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s",
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: darkMode ? "#555555" : "#eeeeee",
    color: darkMode ? "#ffffff" : "#000000",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={pageStyle}>
      <h1>Settings</h1>
      <p>Toggle Dark / Light Mode:</p>
      <button style={buttonStyle} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default Settings;




