import { useContext, useEffect, useState } from "react";
import { WordleContext } from "../../App";

interface Props {
  id: number;
  rowId: number;
}

const Tile = ({ id, rowId }: Props) => {
  const [letter, setLetter] = useState("");
  const [completed, setCompleted] = useState(true);
  const { word, currentRow, guessedWord, completedRows } =
    useContext(WordleContext);

  const [colors, setColor] = useState({ back: "white", font: "black" });

  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };

  function changeColors() {
    const arrayWord = word.split("");
    if (arrayWord.includes(letter)) {
      if (arrayWord[id] === letter) {
        return setColor({ back: "lightgreen", font: "white" });
      }
      return setColor({ back: "gold", font: "white" });
    }
    return setColor({ back: "grey", font: "white" });
  }

  useEffect(() => {
    if (currentRow === rowId) {
      setLetter(guessedWord[id]);
    }
    if (completedRows.includes(rowId) && completed) {
      changeColors();
      setCompleted(false);
    }
  }, [guessedWord, completedRows]);

  return (
    <>
      <div
        style={style}
        className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2"
      >
        <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
      </div>
    </>
  );
};

export default Tile;
