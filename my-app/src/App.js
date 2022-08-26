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
            return <div className="qty_1">{name[1]}</div>
          }
        })
      );
    });
  }, []);

  if (!qty) return null;

  return (
    <div className="App">
      <header className="App-header">
        QTY:
        <div className="qty">{qty}</div>
      </header>
    </div>
  );
}

export default App;
