import { useState } from "react";
import Eventform from "../components/Eventform";
import LikeButton from "../components/LikeButton";

function Event() {
  const [events, setEvents] = useState([]);

  const AddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <div className="p-6">
      <Eventform onSubmit={AddEvent} />

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Posted Events</h2>

        {events.length === 0 ? (
          <p>No events yet</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="border p-4 mb-2 rounded">
              <LikeButton />
              <h3 className="font-semibold">{event.title}</h3>
              <p>{event.location}</p>
              <p>{event.sport}</p>
              <p>{event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Event;