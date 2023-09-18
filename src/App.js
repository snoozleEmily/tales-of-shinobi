import { useState } from "react";
import "./App.css";
import "./index.css";
import StartButton from "./StartButton.js";
import Title from "./Title.js";
import GameDisplay from "./GameDisplay.js";
import Footer from "./Footer.js";

function App() {
  const [startGame, setStartGame] = useState(false);

  const handleButtonClick = () => {
    setStartGame(true);
  };

  return (
    <>
      <header className="header-data">
        <Title />
        <section>
          <div className="lines-data">
            <div className="line-left-data"></div>
            <div className="line-right-data"></div>
          </div>
        </section>
      </header>
      <div className="black-box-data">
      {!startGame && (
          <>
            <img src={require("./images/narutoFront.png")} alt="Naruto" className="naruto-start-screen-data"/>
            <img src={require("./images/minatoFront.png")} alt="Minato" className="minato-start-screen-data"/>
          </>
        )}
        {!startGame && <StartButton onClick={handleButtonClick} />}
        {startGame && <GameDisplay />}
      </div>
      <Footer />
    </>
  );
}

export default App;
