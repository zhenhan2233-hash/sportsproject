import { useState } from "react";
import { useTheme } from "../App";
import Eventform from "../components/Eventform";
import LikeButton from "../components/LikeButton";

function Event() {
  const { darkMode } = useTheme();
  const [events, setEvents] = useState([]);

  const AddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <div className="p-6">
      <Eventform onSubmit={AddEvent} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Posted Events</h2>

        {events.length === 0 ? (
          <p className="text-gray-500 italic">No events yet. Be the first to post!</p>
        ) : (
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className={`border p-5 rounded-xl shadow-sm transition-colors duration-300 ${darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <LikeButton />
                </div>
                <div className={`flex flex-col gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                  <p><span className="font-medium">Sport:</span> {event.sport}</p>
                  <p className="mt-2 text-base">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;