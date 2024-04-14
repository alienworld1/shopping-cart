import Card from "./Card";

const range = (start, end, step = 1) => {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
};

const Shop = () => {
  return (
    <main className="flex-1 p-4 grid grid-cols-3 items-center gap-4 overflow-auto justify-center bg-violet-100">
      {range(1, 9).map((id) => (
        <Card key={id} id={id} />
      ))}
    </main>
  );
};

export default Shop;