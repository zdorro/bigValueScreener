import axios from "axios";
import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const baseURL = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500";
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {

      const { bids } = res.data;

      const newSignals = bids
      .map(([price, qty]) => ({ price, qty }))
      .filter(({ qty }) => qty > 1);

      setSignals(newSignals);

    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        QTY:
        <div className="qty">
          {signals.map(({price, qty})=> <div className="qty_1">{price}: {qty}</div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
