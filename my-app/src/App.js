import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const baseUrl = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5000";
  axios.get(baseUrl).then((res) => {
    let firstArray = res.data.bids.map(function(name) {
      return name[1]
    })
    firstArray.forEach(element => {
      if (element > 50) {
        console.log(element)
      }
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>srccccc/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
