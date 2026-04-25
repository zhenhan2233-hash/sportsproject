

import { FaHome } from "react-icons/fa"; 
import { FaQuestion } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarked } from "react-icons/fa";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Event from "./pages/Event";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter basename="/sportsproject/">
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t-5 border-blue-500 p-2 flex flex-wrap justify-between gap-2 z-50">
        <NavLink to="/" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <FaHome className="text-xl mb-2" />Home
        </NavLink>
        <NavLink to="/map" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <FaMapMarked className="text-xl mb-2" />Map
        </NavLink>
        <NavLink to="/event" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <MdEvent className="text-xl mb-2" />Events
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <IoChatboxEllipses className="text-xl mb-2" />Chat
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <IoPersonSharp className="text-xl mb-2" />Profile
        </NavLink>
        <NavLink to="/setting" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <FaGear className="text-xl mb-2" />Settings
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <FaQuestion className="text-xl mb-2" />About
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex flex-1 min-w-[80px] flex-col items-center justify-center p-2 border-2 rounded text-center ${isActive ? 'bg-blue-500' : ''}`}>
          <FaMagnifyingGlass className="text-xl mb-2" />Search
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
  );
}

export default App;