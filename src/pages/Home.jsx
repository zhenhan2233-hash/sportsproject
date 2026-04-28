import React from "react";
import { useTheme } from "../App";

function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        SportsAid
      </h1>

      <p
        className={`text-lg mb-6 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Connecting athletes. Supporting communities. Providing Oppurtunities.
      </p>

      <div
        className={`shadow-md rounded-2xl p-6 w-96 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
        }`}
      >
        <p>
          SportsAid helps athletes find support, connect with others, and grow together through sports.
        </p>
      </div>
    </div>
  );
}

export default Home;