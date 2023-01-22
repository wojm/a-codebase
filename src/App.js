import { useState } from "react";
import "./styles.css";

export default function App() {
  const [chips, changeChips] = useState([]);
  const [playerTurn, changePlayerTurn] = useState("red");

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
  function addChips() {
    if (chips.length < 6) {
      changeChips([...chips, playerTurn]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
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
  );
}
