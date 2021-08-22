import { useState } from "react";
import "./styles.css";

function Column(props) {
  return (
    <div className="column" onClick={props.onClick}>
      {[5, 4, 3, 2, 1, 0].map((rowIndex) => (
        <div className={`slot ${props.chips[rowIndex]}`} key={rowIndex}></div>
      ))}
    </div>
  );
}

export default function App() {
  const [board, changeBoard] = useState([[], [], [], [], [], [], []]);
  const [playerTurn, changePlayerTurn] = useState("red");

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
  function playColumn(columnNumber) {
    if (board[columnNumber].length < 6) {
      board[columnNumber] = [...board[columnNumber], playerTurn];
      changeBoard([...board]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
      <div className="board">
        {board.map((column, index) => (
          <Column
            key={index.toString()}
            onClick={() => playColumn(index)}
            chips={column}
          ></Column>
        ))}
      </div>
      <p>It is {playerTurn}'s turn</p>
    </div>
  );
}
