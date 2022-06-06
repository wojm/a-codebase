import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
function connectSlots() {
  let [playerTurn, changePlayerTurn] = useState("red");
  function togglePlayerTurn() {
    if (playerTurn == "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
