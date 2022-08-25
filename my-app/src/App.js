import logo from './logo.svg';
import './App.css';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const url = 'https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5000';
/*
  .then(res => console.log(res.data.asks))
  .catch(error => console.log(error));
*/
const arr = [];
class GetTotal {
  async getUrl(url) {
    try {
      const res = await axios.get(url);

      return res.data.asks.forEach(function(value) {
        arr.push(value[1]);
      });
    } catch (error) {
      console.log(error.massage);
      return false;
    }
  }
}

const getTotal = new GetTotal();

(async () => {
  await getTotal.getUrl(url);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 30) {
    console.log(arr[i]);
    return arr[i];
  }
}
})();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class='text'>
          async();
        </p>
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
