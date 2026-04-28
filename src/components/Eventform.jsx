import { useState } from "react";
import { useTheme } from "../App";

function Eventform({ onSubmit }) {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    sport: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({
      title: "",
      location: "",
      sport: "",
      description: "",
    });
  };

  const inputClass = `block w-full mb-3 p-2 border rounded focus:outline-none transition-colors duration-300 ${
    darkMode 
      ? "bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500" 
      : "bg-white border-gray-300 text-black focus:border-blue-500"
  }`;

  return (
    <form onSubmit={handleSubmit} className={`border p-4 rounded-xl shadow-sm transition-colors duration-300 ${darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}>
      <h2 className="text-lg font-bold mb-4">Create New Event</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className={inputClass}
      />

      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className={inputClass}
      />

      <input
        name="sport"
        value={formData.sport}
        onChange={handleChange}
        placeholder="Sport"
        className={inputClass}
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className={`${inputClass} resize-none h-24`}
      />

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300 mt-2">
        Post Event
      </button>
    </form>
  );
}

export default Eventform;