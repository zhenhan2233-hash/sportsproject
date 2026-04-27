
import React, { createContext, useContext, useState } from "react";

import { FaHome, FaQuestion } from "react-icons/fa";
import { FaMagnifyingGlass, FaGear } from "react-icons/fa6";
import { IoChatboxEllipses, IoPersonSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Event from "./pages/Event";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import Map from "./pages/Map";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? "#0F172A" : "#f8f8f8",
    color: darkMode ? "#f0f0f0" : "#111111",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  const navLinkStyle = ({ isActive }) =>
    `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${
      isActive ? "bg-blue-500 text-white" : "text-black"
    }`;


  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div style={appStyle}>
        <BrowserRouter basename="/sportsproject">

          <nav className="fixed bottom-0 left-0 w-full bg-white border-t-4 border-blue-500 p-2 flex flex-wrap justify-between gap-2 z-50">
            <NavLink to="/" className={navLinkStyle}>
              <FaHome className="text-xl mb-2" />

              Home
            </NavLink>

            <NavLink to="/map" className={navLinkStyle}>

              <FaMapMarked className="text-xl mb-2" />
              Map
            </NavLink>

            <NavLink to="/event" className={navLinkStyle}>

              <MdEvent className="text-xl mb-2" />

              Events
            </NavLink>

            <NavLink to="/chat" className={navLinkStyle}>

              <IoChatboxEllipses className="text-xl mb-2" />

              Chat
            </NavLink>

            <NavLink to="/profile" className={navLinkStyle}>

              <IoPersonSharp className="text-xl mb-2" />


              Profile
            </NavLink>

            <NavLink to="/setting" className={navLinkStyle}>

              <FaGear className="text-xl mb-2" />

              Settings
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>

              <FaQuestion className="text-xl mb-2" />


              About
            </NavLink>

            <NavLink to="/search" className={navLinkStyle}>

              <FaMagnifyingGlass className="text-xl mb-2" />


              Search
            </NavLink>
          </nav>


          <div className="pb-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/event" element={<Event />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;