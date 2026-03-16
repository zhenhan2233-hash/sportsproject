import { useState } from "react";

function Card({ name, title, blurb, github, skills }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-800">
        {name}
      </h3>

      <p className="text-blue-500 font-semibold">{title}</p>
      <p className="text-gray-500 mt-2">{blurb}</p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-sm text-blue-500 hover:text-blue-700 font-semibold"
      >
        {showMore ? "▲ Show Less" : "▼ Show More"}
      </button>

      {showMore && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-left">
          {github && (
            <p className="text-sm text-gray-600">
              🔗{" "}
              <a
                href={github}
                className="text-blue-500 hover:underline"
              >
                GitHub Repository
              </a>
            </p>
          )}

          {skills && (
            <p className="text-sm text-gray-600 mt-2">
              Skills: {skills}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;