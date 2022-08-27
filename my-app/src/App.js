import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


const url = 'https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=300';


function App() {

  const [value, setValue] = useState([]);

  useEffect(() => {
      axios
        .get(url)
        .then((result) => {
          setValue(result.data.asks);
        });
    }, []);

     const newValue = value.map(elem => {     
      return elem;
          });

    const newValue2 = newValue.filter(val => {
              if (val[1] > 1 && val[0] > 1) {
                const newVal = Number(val[1]);
                const newValTwo = Number(val[0]);
                  val[1] = newVal.toString();
                  val[0] = newValTwo.toString();
                return val;
              }
            })

  return (
    <div className="App">
      <header className="App-header">
        ДА ЕСТЬ ЖЕШЬ!
          <div className="valueArr">
            {newValue2.map(el => {
              return (
                <div className={(el[1] >= 2) ? 'valueTrue' : 'valueElem'}>Цена: {el[0]}; Наполненность: {el[1]}</div>
              )
            })}
          </div>
      </header>
    </div>
  );
}

export default App;
