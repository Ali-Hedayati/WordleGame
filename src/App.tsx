import "./App.css";
import MainPage from "./components/MainPage";
import WordleContextProvider from "./components/Context/WordleContextProvider";
function App() {
  return (
    <WordleContextProvider>
      <MainPage />
    </WordleContextProvider>
  );
}

export default App;
