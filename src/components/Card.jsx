import { useState } from "react";
import { useTheme } from "../App";

function Card({ name, title, background, goals, skills, pic }) {
  const { darkMode } = useTheme();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`rounded-2xl shadow-md w-144 p-35 text-center hover:shadow-xl transition-all ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h3 className={`text-4xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        {name}
      </h3>

      <img src={pic} alt="profile" className="w-24 h-24 mx-auto mt-4"/>

      <p className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>{title}</p>
      <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{background}</p>

      <button
        onClick={function() { setShowMore(!showMore); }}
        className={`mt-4 text-sm font-semibold ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}
      >
        {showMore ? "▲ Show Less" : "▼ Show More"}
      </button>

      {showMore && (
        <div className={`mt-4 pt-4 border-t text-left ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
        
          

          {skills && (
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Skills: {skills}

             
            </p>
          )}

{goals && (
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Goals: {goals}

             
            </p>
          )}

        </div>
      )}
    </div>
  );
}

export default Card;