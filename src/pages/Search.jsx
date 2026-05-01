import React, { useState } from "react";
import { useTheme } from "../App";
import { supabase } from "../supabase";
import LikeButton from "../components/LikeButton";

function Search() {
  const { darkMode } = useTheme();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    
    // We fetch all events from the database
    const response = await supabase.from("event").select("*");
    const allEvents = response.data;

    // We filter the events in simple JavaScript
    const filteredEvents = allEvents.filter(function(item) {
      const nameMatch = item.eventname.toLowerCase().includes(query.toLowerCase());
      const sportMatch = item.sport.toLowerCase().includes(query.toLowerCase());
      return nameMatch || sportMatch;
    });

    setResults(filteredEvents);
  }

  return (
    <div className="p-6 mb-24">
      <h1>Search Events</h1>
      
      <form onSubmit={handleSearch} className="mb-8 mt-4">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={function(e) { setQuery(e.target.value); }}
          className="border p-2 rounded w-64 mr-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      <div className="space-y-4">
        {results.map(function(item, index) {
          return (
            <div key={index} className={`border p-4 rounded-xl ${darkMode ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
              <div className="flex justify-between">
                <h3 className="font-bold">{item.eventname}</h3>
                <LikeButton />
              </div>
              <p>Sport: {item.sport}</p>
              <p>Location: {item.location}</p>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;