import { ReactNode, useState } from "react";
import WordleContext from "./WordleContext";
import _ from "lodash";
import { words } from "../words";

interface Props {
  children: ReactNode;
}

const WordleContextProvider = ({ children }: Props) => {
  const sampledWord = _.sample(words);
  const initialWord = sampledWord ? sampledWord.toUpperCase() : "REACT";
  const [word, setWord] = useState<string>(initialWord);
  const [completedRows, setCompletedRows] = useState<number[]>([]);
  const [guessedWord, setGuessedWord] = useState<string>("");
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [won, setWon] = useState<boolean>(false);

  //this function will set the guessedWord
  function guessTheWord(char: string) {
    if (guessedWord.length === 5) return;
    setGuessedWord(guessedWord.concat(char));
  }
  // this function will handle enter event
  function enterHandler() {
    if (won) {
      alert("You already won, refresh to play again");
      return;
    }
    if (currentRow > 5)
      return alert("oops..., you lose, Press refresh to try again. ");
    if (guessedWord.length < 5) return;

    // if (!words.includes(guessedWord.toLocaleLowerCase()))
    //   return alert("Word not found");

    if (guessedWord === word) {
      setWon(true);
      alert("Congratulations you got it");
    }

    setCurrentRow((prev) => prev + 1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessedWord("");
  }

  function deleteHandler() {
    setGuessedWord(guessedWord.slice(0, guessedWord.length - 1));
  }
  
  return (
    <WordleContext.Provider
      value={{
        guessTheWord,
        enterHandler,
        completedRows,
        currentRow,
        word,
        guessedWord,
        deleteHandler,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export default WordleContextProvider;
