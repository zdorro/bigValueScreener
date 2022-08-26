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
              if (val[1] > 1) {
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
                //<div className='valueElem'>
                    <div className={(el[1] > 2) ? 'valueTrue' : 'valueElem'}>Цена: {el[0]}; Наполненность: {el[1]}</div>
                //</div>
              )
            })}
          </div>
      </header>
    </div>
  );
}

export default App;
