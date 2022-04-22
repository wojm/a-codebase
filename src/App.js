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
      It is {playerTurn}'s turn
      <button onClick={togglePlayerTurn}>change player</button>
    </div>
  );
}
