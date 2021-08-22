import "./styles.css";


export default function App() {
  const names = [
    'Matt',
    'Faran',
    'Joe',
    'Michael',
  ];
  return (
    <div className="App">
      <p>{names[0]}</p>
      <p>{names[1]}</p>
      <p>{names[2]}</p>
      <p>{names[3]}</p>
    </div>
  );
}
