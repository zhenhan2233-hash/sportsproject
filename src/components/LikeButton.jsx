import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={function() { setLikes(likes + 1); }}
      className="flex items-center gap-2
      bg-gray-100 hover:bg-red-100
      px-4 py-2 rounded-full
      transition-all duration-200"
    >
      <span className="text-xl">👍</span>
      <span className="font-bold text-gray-700">
        {likes}
      </span>
    </button>
  );
}

export default LikeButton;