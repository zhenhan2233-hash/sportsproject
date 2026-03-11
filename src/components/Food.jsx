function Food({ food1, food2, food3 }) {
  return (
    <div>
      <h2>My Favorite Foods</h2>
      <ul>
        <li>electric apple</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
        <li>air</li>
      </ul>
    </div>
  );
}

export default Food;
