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

const WordleContext = React.createContext<WordleContextType>(
  {} as WordleContextType
);

export default WordleContext;
