import { useContext } from "react";
import WordleContext from "../Context/WordleContext";


interface Props {
  letter: string;
  isMainButton: boolean;
}

const Key = ({ isMainButton, letter }: Props) => {
  const { guessTheWord, deleteHandler, enterHandler } =
    useContext(WordleContext);

  function handleClickMainButton() {
    if (letter == "Enter") {
      enterHandler();
    } else {
      deleteHandler();
    }
  }

  if (isMainButton) {
    return (
      <button
        onClick={() => handleClickMainButton()}
        style={{
          width: 65.4,
          height: 58,
          margin: 3,
          borderRadius: 3,
          display: "grid",
          placeItems: "center",
          fontSize: 15,
          backgroundColor: "#d3d6da",
          color: "black",
          fontFamily: "Arial",
          cursor: "pointer",
          border: 0,
          fontWeight: "bold",
        }}
      >
        {letter}
      </button>
    );
  }
  return (
    <button
      onClick={() => guessTheWord(letter)}
      style={{
        width: 43,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        backgroundColor: "#d3d6da",
        color: "black",
        fontFamily: "Arial",
        cursor: "pointer",
        border: 0,
        fontWeight: "bold",
      }}
    >
      {letter}
    </button>
  );
};

export default Key;
