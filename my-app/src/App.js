import logo from './logo.svg';
import './App.css';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const url = 'https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5000';


const arr = [];


class GetTotal {
  
  async getUrl(url) {
    try {
      const res = await axios.get(url);
      return res.data.asks.forEach(function(value) {
        arr.push(value[1]);
      });
      }
     catch (error) {
      console.log(error.massage);
      return false;
    }  
  }
}
const getTotal = new GetTotal();

const arr2 = [];

  (async () => {
    await getTotal.getUrl(url);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      arr2.push(arr[i]); 
    } 
  }
  console.log(arr2);
  })();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div><h1>{arr2}</h1></div>

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
