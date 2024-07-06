import Row from "./Row";

const Grid = () => {
  const rows = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="m-4">
        {rows.map((_, index) => (
          <Row key={index} />
        ))}
      </div>
    </>
  );
};

export default Grid;
