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


  useEffect(function () {
    async function loadProfile() {
      const savedName = localStorage.getItem('userName');
      if (savedName) {

        const response = await supabase
          .from('profile')
          .select('*')
          .eq('Name', savedName)
          .limit(1);

        const data = response.data;
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


    const response = await supabase.from('profile').insert([
      { Name: name, Sport: sport, Info: info, Events: events }
    ]);

    if (response.error) {
      alert("Failed to save profile.");
    } else {

      localStorage.setItem('userName', name);
      setSaved(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-10 mb-24">
      <h1 className="text-2xl font-bold">Profile Setup</h1>

      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 w-80 p-6 border rounded-xl ${darkMode ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
        <input 
          placeholder="Name"
          value={name}
          onChange={function (e) { setName(e.target.value); }}
          className={`border p-2 rounded text-black ${darkMode ? "text-white" : ""}`}
        />
        <input
          placeholder="Sport"
          value={sport}
          onChange={function (e) { setSport(e.target.value); }}
          className={`border p-2 rounded text-black ${darkMode ? "text-white" : ""}`}
        />
        <input
          placeholder="Info"
          value={info}
          onChange={function (e) { setInfo(e.target.value); }}
          className={`border p-2 rounded text-black ${darkMode ? "text-white" : ""}`}
        />
        <input
          placeholder="Events"
          value={events}
          onChange={function (e) { setEvents(e.target.value); }}
          className={`border p-2 rounded text-black ${darkMode ? "text-white" : ""}`}
        />

        <button className="bg-blue-500 text-white p-3 rounded-lg mt-2 font-bold">
          Save Profile
        </button>
      </form>

      {saved && (
        <div className={`p-6 w-80 rounded-2xl border ${darkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"}`}>
          <h2 className="font-bold text-xl">User: {name}</h2>
          <p>Sport: {sport}</p>
          <p>Info: {info}</p>
          <p>Events: {events}</p>
        </div>
      )}
    </div>
  );
}

export default Prof;