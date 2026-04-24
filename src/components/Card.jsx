import { useState } from "react";

function Card({ name, title, background, goals, skills, pic }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md w-144 p-35 text-center hover:shadow-xl transition-all">
      <h3 className="text-4xl font-bold text-gray-800">
        {name}
      </h3>

      <img src={pic} alt="profile" className="w-24 h-24 mx-auto mt-4"/>

      <p className="text-blue-500 font-semibold">{title}</p>
      <p className="text-gray-500 mt-2">{background}</p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-sm text-blue-500 hover:text-blue-700 font-semibold"
      >
        {showMore ? "▲ Show Less" : "▼ Show More"}
      </button>

      {showMore && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-left">
        
          

          {skills && (
            <p className="text-sm text-gray-600 mt-2">
              Skills: {skills}

             
            </p>
          )}

{goals && (
            <p className="text-sm text-gray-600 mt-2">
              Goals: {goals}

             
            </p>
          )}

        </div>
      )}
    </div>
  );
}

export default Card;