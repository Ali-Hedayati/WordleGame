import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl m-4">WORDLE</h1>
        <Grid />
        <Keyboard />
    
      </div>
    </>
  );
};

export default MainPage;
