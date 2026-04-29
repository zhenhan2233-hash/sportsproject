import React, { useState } from "react";
import { useTheme } from "../App";




function Prof() {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [info, setInfo] = useState("");
  const [events, setEvents] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
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
        <input placeholder="Name" onChange={function(e) { setName(e.target.value); }} className={inputClass}/>
        <input placeholder="Sport" onChange={function(e) { setSport(e.target.value); }} className={inputClass}/>
        <input placeholder="Info" onChange={function(e) { setInfo(e.target.value); }} className={inputClass}/>
        <input placeholder="Events" onChange={function(e) { setEvents(e.target.value); }} className={inputClass}/>

        

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