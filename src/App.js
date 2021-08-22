import { useState } from "react";
import "./styles.css";

function Column() {
  return (
    <div className="column">
      <p className="slot"></p>
      <p className="slot"></p>
      <p className="slot"></p>
      <p className="slot"></p>
      <p className="slot"></p>
      <p className="slot"></p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div className="board">
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </div>
    </div>
  );
}
