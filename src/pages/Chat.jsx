import React from "react";
import { useTheme } from "../App";

function Chat() {
  const { darkMode } = useTheme();

  return (
    <>
      <div className={`border p-4 rounded-2xl shadow-md w-96 transition-colors duration-300 ${darkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-gray-200 text-black"}`}>
        <h1 className="font-bold text-center">Chat</h1>
      </div>

      <div className="fixed bottom-35 right-10 flex p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className={`border-2 p-2 rounded-l-xl outline-none transition-colors duration-300 ${darkMode ? "bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500" : "bg-white border-gray-200 text-black focus:border-blue-500"}`}
        />
        <button className="border-y-2 border-r-2 border-blue-500 p-2 rounded-r-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
          Send
        </button>
      </div>
    </>
  );
}

export default Chat;