import React, { useState, useEffect } from "react";
import { useTheme } from "../App";
import { supabase } from "../supabase";


function Prof() {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [info, setInfo] = useState("");
  const [events, setEvents] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(function() {
    async function loadProfile() {
      const savedName = localStorage.getItem('userName');
      if (savedName) {
        const { data, error } = await supabase
          .from('profile')
          .select('*')
          .eq('Name', savedName)
          .limit(1);

        if (data && data.length > 0) {
          setName(data[0].Name || "");
          setSport(data[0].Sport || "");
          setInfo(data[0].Info || "");
          setEvents(data[0].Events || "");
          setSaved(true);
        }
      }
    }
    loadProfile();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from('profile').insert([
      { Name: name, Sport: sport, Info: info, Events: events }
    ]);
    
    if (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    } else {
      localStorage.setItem('userName', name);
      setSaved(true);
    }
  }

  const inputClass = `border p-3 rounded-lg focus:outline-none transition-colors duration-300 ${
    darkMode 
      ? "bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500" 
      : "bg-white border-gray-300 text-black focus:border-blue-500"
  }`;

  return (
    <div className="flex flex-col items-center gap-6 pt-10 mb-24">
      <h1 className="text-2xl font-bold">Profile Setup</h1>

      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 w-80 p-6 border rounded-xl shadow-sm transition-colors duration-300 ${darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}>
        <input placeholder="Name" value={name} onChange={function(e) { setName(e.target.value); }} className={inputClass}/>
        <input placeholder="Sport" value={sport} onChange={function(e) { setSport(e.target.value); }} className={inputClass}/>
        <input placeholder="Info" value={info} onChange={function(e) { setInfo(e.target.value); }} className={inputClass}/>
        <input placeholder="Events" value={events} onChange={function(e) { setEvents(e.target.value); }} className={inputClass}/>

        

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition-colors duration-300 mt-2">
          Save Profile
        </button>
      </form>

      {saved && (
        <div className={`rounded-2xl shadow-md p-6 w-80 text-center transition-colors duration-300 ${darkMode ? "bg-slate-800 text-gray-200" : "bg-white text-gray-800"}`}>
          <h2 className={`font-bold text-xl mb-2 ${darkMode ? "text-white" : "text-black"}`}>User: {name}</h2>
          <h3 className={`font-semibold mb-1 ${darkMode ? "text-blue-400" : "text-blue-800"}`}>Sport Interests: <span className="font-normal">{sport}</span></h3>
          <h3 className={`font-semibold mb-1 ${darkMode ? "text-blue-400" : "text-blue-800"}`}>Additional Info: <span className="font-normal">{info}</span></h3>
          <h4 className={`font-semibold mt-3 p-2 rounded-lg ${darkMode ? "bg-slate-900 text-gray-300" : "bg-gray-100 text-gray-800"}`}>Events: {events}</h4>
        </div>
      )}
    </div>
  );
}

export default Prof;