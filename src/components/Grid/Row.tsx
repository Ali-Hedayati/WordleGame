import Tile from "./Tile";
interface Props {
  id: number;
}

const Row = ({id}: Props) => {
  const tiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        {tiles.map((_, index) => (
          <Tile key={index} id={index} rowId={id} />
        ))}
      </div>
    </>
  );
};

export default Row;
