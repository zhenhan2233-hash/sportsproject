import { useState } from "react";

function Eventform({ onSubmit }) {
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

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="block mb-2"
      />

      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="block mb-2"
      />

      <input
        name="sport"
        value={formData.sport}
        onChange={handleChange}
        placeholder="Sport"
        className="block mb-2"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="block mb-2"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Post Event
      </button>
    </form>
  );
}

export default Eventform;