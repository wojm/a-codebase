import "./styles.css";


export default function App() {
  const names = [
    'Matt',
    'Faran',
    'Joe',
    'Michael',
  ].sort();
  return (
    <div className="App">
      { names.map(name => <p>{name}</p>) }
    </div>
  );
}
