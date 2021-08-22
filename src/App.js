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
      { names.map((name, index) => <p className={ index % 2 === 0? 'light-gray': '' }>{name}</p>) }
    </div>
  );
}
