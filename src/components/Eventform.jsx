function Eventform({ title, location, sport, privacy, description, extra }) {
    return (
      <div className="border p-4 rounded-2xl shadow-md w-80 bg-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
  
        <p><strong>📍 Location:</strong> {location}</p>
        <p><strong>🏀 Sport:</strong> {sport}</p>
        <p><strong>🔒 Privacy:</strong> {privacy}</p>
  
        <p className="mt-2">
          <strong>Description:</strong> {description}
        </p>
  
        <p className="mt-2 text-gray-600">
          <strong>Extra Info:</strong> {extra}
        </p>
      </div>
    );
  }
  
  export default Eventform;