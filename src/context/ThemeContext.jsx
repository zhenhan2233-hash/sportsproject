import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ dark }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {dark}
    </ThemeContext.Provider>
  );
};

export function useTheme() { return useContext(ThemeContext); }

export default ThemeProvider;
