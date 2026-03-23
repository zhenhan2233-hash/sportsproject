function Prof({ Name, Sport, Info, Events}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center">
      <h2 className="text-bold">User:{Name} </h2>

      <h3 className = "text-bold text-blue-800">Sport Interests:{Sport}</h3>

      <h3 className = "text-blue-800">Additional Information: {Info}</h3>

      <h4 className = "text-bold text-gray-800">Events: {Events}</h4>
      </div>


      


    
  );
}

export default Prof;
