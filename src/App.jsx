import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is so cool!</p>
        <ul>
          <li>Phone</li>
          <li>Wallet</li>
          <li>Keys</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
