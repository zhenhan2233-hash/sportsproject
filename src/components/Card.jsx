function Card({ name, type, food }) {
  return (
    <>
      <h1 className=" text-4xl text-center font-bold text-white-300 bg-yellow-300 rounded-lg text-shadow-xl/30 p-8">
        Pikachu's STUPID JOB
      </h1>

      <h1 className="text-4xl">
        He likes {name}, which is a {type} and is {food}
        
      </h1>
    </>
  );
}

export default Card;
