import { useState, useEffect } from "react";
import { useTheme } from "../App";
import Eventform from "../components/Eventform";
import LikeButton from "../components/LikeButton";
import { supabase } from "../supabase";

function Event() {
  const { darkMode } = useTheme();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from("event")
      .select("*");

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data);
    }
    setLoading(false);
  }

  async function AddEvent(newEvent) {
    const userName = localStorage.getItem('userName') || 'Anonymous';

    const { data, error } = await supabase
      .from("event")
      .insert([{
        eventname: newEvent.title,
        sport: newEvent.sport,
        location: newEvent.location,
        desc: newEvent.description,
        Username: userName,
      }])
      .select();

    if (error) {
      console.error("Error saving event:", error);
      return;
    }

    setEvents((prev) => [data[0], ...prev]);
  }

  return (
    <div className="p-6">
      <Eventform onSubmit={AddEvent} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Posted Events</h2>

        {loading ? (
          <p className="text-gray-500 italic">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-gray-500 italic">No events yet. Be the first to post!</p>
        ) : (
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={event.eventname + index}
                className={`border p-5 rounded-xl shadow-sm transition-colors duration-300 ${darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{event.eventname}</h3>
                  <LikeButton />
                </div>
                <div className={`flex flex-col gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <p><span className="font-medium">Posted by:</span> {event.Username}</p>
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                  <p><span className="font-medium">Sport:</span> {event.sport}</p>
                  <p className="mt-2 text-base">{event.desc}</p>
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