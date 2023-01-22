import { useState } from "react";
import "./styles.css";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState('red');

  function togglePlayerTurn() {
    if (playerTurn === 'red') {
      changePlayerTurn('yellow');
    } else {
      changePlayerTurn('red');
    }
  }

  return (
    <div className="App">
      <div className="blue" onClick={togglePlayerTurn}>
        <div className={`slot ${playerTurn}`}></div>
      </div>
      It is {playerTurn}'s turn
    </div>
  );
}
