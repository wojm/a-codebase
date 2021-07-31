import { useState } from "react";
import "./styles.css";

function Dot(props) {
  const className = "dot " + props.color;
  return <p className={className}></p>;
}

function Column(props) {
  return (
    <div class="column" onClick={props.onClick}>
      <Dot color={props.colors[5]}></Dot>
      <Dot color={props.colors[4]}></Dot>
      <Dot color={props.colors[3]}></Dot>
      <Dot color={props.colors[2]}></Dot>
      <Dot color={props.colors[1]}></Dot>
      <Dot color={props.colors[0]}></Dot>
    </div>
  );
}

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  function togglePlayerTurn() {
    if (playerTurn === "yellow") {
      changePlayerTurn("red");
    } else {
      changePlayerTurn("yellow");
    }
  }
  const [colors, setColors] = useState([]);
  const [colors2, setColors2] = useState([]);
  const [colors3, setColors3] = useState([]);
  const [colors4, setColors4] = useState([]);
  const [colors5, setColors5] = useState([]);
  const [colors6, setColors6] = useState([]);
  const [colors7, setColors7] = useState([]);
  function onClick() {
    setColors([...colors, playerTurn]);
    togglePlayerTurn()
  }
  function onClick2() {
    setColors2([...colors2, playerTurn]);
    togglePlayerTurn()
  }
  function onClick3() {
    setColors3([...colors3, playerTurn]);
    togglePlayerTurn()
  }
  function onClick4() {
    setColors4([...colors4, playerTurn]);
    togglePlayerTurn()
  }function onClick5() {
    setColors5([...colors5, playerTurn]);
    togglePlayerTurn()
  }
  function onClick6() {
    setColors6([...colors6, playerTurn]);
    togglePlayerTurn()
  }
  function onClick7() {
    setColors7([...colors7, playerTurn]);
    togglePlayerTurn()
  }

  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div className="board">
        <Column onClick={onClick} colors={colors}></Column>
        <Column onClick={onClick2} colors={colors2}></Column>
        <Column onClick={onClick3} colors={colors3}></Column>
        <Column onClick={onClick4} colors={colors4}></Column>
        <Column onClick={onClick5} colors={colors5}></Column>
        <Column onClick={onClick6} colors={colors6}></Column>
        <Column onClick={onClick7} colors={colors7}></Column> 
      </div>
      <br />
      It is {playerTurn}s turn
    </div>
  );
}

/**
 * Task 2 - add functionality for dropping a chip
 * click on a button above each column
 *   then the lowest unfilled slot gets filled with a color
 */

/**
 * Task 3
 * show if there are 4 pieces connected in a row
 *  - vertically
 *  - horizontally
 *  - diagonally
 */
function isWin(board) {}

const exampleState = {
  nextTurn: "yellow",
  board: [[], [], [], ["yellow", "yellow", "red"], ["red"], [], []]
};

isWin(exampleState.board); // no one wins

isWin([
  [],
  [],
  [],
  ["yellow", "yellow", "yellow", "yellow", "red"],
  ["red"],
  ["red"],
  ["red"]
]); // yellow wins
