import { useState } from "react";
import { useTheme } from "../App";

function Eventform({ onSubmit }) {
  const { darkMode } = useTheme();


  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();


    const newEvent = {
      title: title,
      location: location,
      sport: sport,
      description: description
    };


    onSubmit(newEvent);


    setTitle("");
    setLocation("");
    setSport("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className={`border p-4 rounded-xl ${darkMode ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
      <h2 className="text-lg font-bold mb-4">Create New Event</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={function (e) { setTitle(e.target.value); }}
        className="border p-2 rounded w-full mb-2 text-black"
        required
      />

      <input
        placeholder="Location"
        value={location}
        onChange={function (e) { setLocation(e.target.value); }}
        className="border p-2 rounded w-full mb-2 text-black"
        required
      />

      <input
        placeholder="Sport"
        value={sport}
        onChange={function (e) { setSport(e.target.value); }}
        className="border p-2 rounded w-full mb-2 text-black"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={function (e) { setDescription(e.target.value); }}
        className="border p-2 rounded w-full mb-2 text-black h-24"
        required
      />

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg font-bold">
        Post Event
      </button>
    </form>
  );
}

export default Eventform;