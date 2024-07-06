import Tile from "./Tile";

const Row = () => {
  const tiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        {tiles.map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
    </>
  );
};

export default Row;
