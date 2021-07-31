import "./styles.css";

function Column() {
  return (
    <div class="column">
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div class="board">
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
