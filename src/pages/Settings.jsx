function Settings() {

  const { darkMode, setDarkMode } = useTheme();
  const pageStyle = {
    backgroundColor: darkMode ? "#0F172A" : "#ffffff",
    color: darkMode ? "#f0f0f0" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s",
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: darkMode ? "#334155" : "#eeeeee",
    color: darkMode ? "#ffffff" : "#000000",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="mb-4">Settings content goes here.</p>
    </div>
  );
}

export default Settings;




