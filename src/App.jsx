

import { FaHome } from "react-icons/fa"; 
import { FaQuestion } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarked } from "react-icons/fa";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import Header from "./components/Header";
import LikeButton from "./components/LikeButton";
import Footer from "./components/Footer";
import Prof from "./components/Prof";
import Settings from "./pages/Settings";
import Event from "./pages/Event";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import Map from "./pages/Map";

function App() {
  return (

    <>
    <BrowserRouter basename="/sportsproject/"></BrowserRouter>

    <BrowserRouter>
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t-5 border-blue-500 p-5 flex gap-6">
    <Link to="/" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <FaHome className="text-xl-text-center text-bold mb-2" />Home</Link>
      <Link to="/map" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <FaMapMarked className="text-xl-text-center text-bold mb-2" />Map</Link>
      <Link to="/event" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <MdEvent className="text-xl-text-center text-bold mb-2" />Events</Link>
       <Link to="/chat" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <IoChatboxEllipses className="text-xl-text-center text-bold mb-2" />Chat</Link>
       <Link to="/profile" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <IoPersonSharp className="text-xl-text-center text-bold mb-2" />Profile</Link>
        <Link to="/setting" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <FaGear className="text-xl-text-center text-bold mb-2" />Settings</Link>
        <Link to="/about" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <FaQuestion className="text-xl-text-center text-bold mb-2" />About</Link>
      <Link to="/search" className="flex flex-col items-center p-2 w-25 h-20 border-2 rounded">
  <FaMagnifyingGlass className="text-xl-text-center text-bold mb-2" />Search</Link>


      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/map" element={<Map/>} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/search" element={<Search/>} />
        
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;