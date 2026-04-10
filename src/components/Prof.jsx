import React, { useState } from "react";

function Prof() {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [info, setInfo] = useState("");
  const [events, setEvents] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <div className="flex flex-col items-center gap-6 mt-10 mb-24">

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} className="border p-2 rounded"/>
        <input placeholder="Sport" onChange={(e) => setSport(e.target.value)} className="border p-2 rounded"/>
        <input placeholder="Info" onChange={(e) => setInfo(e.target.value)} className="border p-2 rounded"/>
        <input placeholder="Events" onChange={(e) => setEvents(e.target.value)} className="border p-2 rounded"/>

        <button className="bg-blue-500 text-white p-2 rounded">
          Save
        </button>
      </form>

      {saved && (
        <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center">
          <h2 className="font-bold">User: {name}</h2>
          <h3 className="font-bold text-blue-800">Sport Interests: {sport}</h3>
          <h3 className="text-blue-800">Additional Information: {info}</h3>
          <h4 className="font-bold text-gray-800">Events: {events}</h4>
        </div>
      )}
    </div>
  );
}

export default Prof;