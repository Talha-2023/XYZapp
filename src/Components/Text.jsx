const Text = () => {
  const fruits = [
    { name: "Apple", price: 10, colour: "red" },
    { name: "Banana", price: 50, colour: "yello" },
    { name: "Watermelon", price: 70, colour: "greem" },
    { name: "Pineapple", price: 12, colour: "yello green" },
    { name: "Mango", price: 20, colour: "yello" },
  ];
  return (
    <div>
      <div>
        {fruits.map((fruit) => {
          return (
            <h1 key={fruit.name}>
              {fruit.name}
              {fruit.price}
              {fruit.colour}
            </h1>
          );
        })}
      </div>
    </div>
  );
};
export default Text;
