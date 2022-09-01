import axios from "axios";
import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import classNames from "classnames";
import Qty from "./components/Qty";

function App() {
  const baseURL = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500";
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const { bids } = res.data;

      const newSignals = bids
        .map(([price, qty]) => ({
          price: price.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1"),
          qty: qty.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1"),
        }))
        .filter(({ qty }) => qty > 0.1);

      setSignals(newSignals);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        QTY:
        <div className="qty">
          {signals.map(({ price, qty }) => (
            <Qty qty={qty} price={price} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
