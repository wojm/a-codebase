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
      { names.map(name => <p>{name}</p>) }
    </div>
  );
}
