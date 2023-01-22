import { useState } from "react";
import "./styles.css";

function Column(props) {
    return (
      <div className="column" onClick={props.onClick}>
        <div className={`slot ${props.chips[5]}`}></div>
        <div className={`slot ${props.chips[4]}`}></div>
        <div className={`slot ${props.chips[3]}`}></div>
        <div className={`slot ${props.chips[2]}`}></div>
        <div className={`slot ${props.chips[1]}`}></div>
        <div className={`slot ${props.chips[0]}`}></div>
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
      <div className="blue" onClick={addChips}>
        <Column onClick={() => playColumn(6)} chips={board[6]}></Column>
        <Column onClick={() => playColumn(5)} chips={board[5]}></Column>
        <Column onClick={() => playColumn(4)} chips={board[4]}></Column>
        <Column onClick={() => playColumn(3)} chips={board[3]}></Column>
        <Column onClick={() => playColumn(2)} chips={board[2]}></Column>
        <Column onClick={() => playColumn(1)} chips={board[1]}></Column>
        <Column onClick={() => playColumn(0)} chips={board[0]}></Column>
      </div>
      It is {playerTurn}'s turn
    </div>
  );
}
