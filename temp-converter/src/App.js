import convert from '../src/convert.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TEMPERATURE CONVERTER</h1>
      
      <form>
      <div className="top">
        <div className="from">
          <h2>FROM</h2>
        <select required >
          <option value='None' selected disabled>--None--</option>
          <option value='Farenheit'>Farenheit (°F)</option>
          <option value='Celcius'>Celsius (°C)</option>
          <option value='Kelvin'>Kelvin (°K)</option>
        </select>
        <input id='input' type='number' />
        
        </div>
        <img id='convert' src={convert} alt="" />
        <div className="to">
        <h2>TO</h2>
        <select required >
          <option value='None' selected disabled>--None--</option>
          <option value='Farenheit'>Farenheit (°F)</option>
          <option value='Celcius'>Celsius (°C)</option>
          <option value='Kelvin'>Kelvin (°K)</option>
        </select>
        <input id='output' type='number' /></div></div>

        <input type="button" id='button' value="CONVERT" />
      </form>

    </div>
  );
}

export default App;
