
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kalamazoo" />
        <footer>
          Coded by Bri Franz-Jonas and open source on{" "}
          <a href="https://github.com/briology101/search-engine">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App
