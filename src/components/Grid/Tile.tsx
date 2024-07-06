import { useState } from "react";

const Tile = () => {
  const [letter, setLetter] = useState("A");
  return (
    <>
      <div className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2">
        <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
      </div>
    </>
  );
};

export default Tile;
