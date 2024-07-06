import { createContext, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { words } from "./components/words";
import _ from "lodash";
import React from "react";

interface WordleContextType {
  word?: string;
  completedRows: number[];
  guessedWord: string;
  currentRow: number;
  enterHandler: () => void;
  guessTheWord: (char: string) => void;
  deleteHandler: () => void;
}

export const WordleContext = React.createContext<WordleContextType>(
  {} as WordleContextType
);

function App() {
  const [word, setWord] = useState(_.sample(words)?.toUpperCase());
  const [completedRows, setCompletedRows] = useState<number[]>([]);
  const [guessedWord, setGuessedWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char: string) {
    if (guessedWord.length === 5) return;
    setGuessedWord(guessedWord.concat(char));
  }

  function enterHandler() {
    if (currentRow > 5)
      return alert("oops..., you lose, Press refresh to try again. ");
    if (guessedWord.length < 5) return;
    // if (!words.includes(guessedWord.toLocaleLowerCase()))
    //   return alert("Word not found");
    if (guessedWord === word) alert("Congratulations you got it");

    setCurrentRow((prev) => prev + 1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessedWord("");
  }

  function deleteHandler() {
    setGuessedWord(guessedWord.slice(0, guessedWord.length - 1));
  }

  return (
    <>
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
        <MainPage />
      </WordleContext.Provider>
    </>
  );
}

export default App;
