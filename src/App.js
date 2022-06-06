import { useState } from "react";
import "./styles.css";

export default function App() {
  let [playerTurn, changePlayerTurn] = useState("red");
  let [chips, changeChips] = useState([]);
  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
  function addChips() {
    if (chips.length < 8) {
      changeChips([...chips, playerTurn]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
      <div className="blue">
        <div className="slot"></div>
        <div className="blue" onClick={togglePlayerTurn}>
          <div className={`slot ${playerTurn}`}></div>
          <div className="board" onClick={addChips}>
            <div className={`slot ${chips[5]}`}></div>
            <div className={`slot ${chips[4]}`}></div>
            <div className={`slot ${chips[3]}`}></div>
            <div className={`slot ${chips[2]}`}></div>
            <div className={`slot ${chips[1]}`}></div>
            <div className={`slot ${chips[0]}`}></div>
          </div>
          It is {playerTurn}'s turn
        </div>
      </div>
    </div>
  );
}
