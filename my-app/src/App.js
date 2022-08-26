import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useCallback, useEffect } from "react";

function App() {
  const baseURL = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500";
  const [qty, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(
        res.data.bids.map(function (name) {
          if (name[1] > 1) {
            return name[1] + '\n'; 
          }
        })
      );
    });
  }, []);

  if (!qty) return null;

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
        <p>{qty}</p>
      </header>
    </div>
  );
}

export default App;
