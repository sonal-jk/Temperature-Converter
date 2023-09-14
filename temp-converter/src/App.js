import convert from '../src/convert.png';
import './App.css';
import Change from './Change';

  //document.body.style.display='none';


function App() {
  return (
    <div className="App">
      <h1 id='head'>TEMPERATURE CONVERTER</h1>
      
      <form>
      <div className="top">
        <div className="from">
          <h2>FROM</h2>
        <select required id='first'>
          <option value='None' selected disabled>--None--</option>
          <option value='Farenheit'>Farenheit (°F)</option>
          <option value='Celsius'>Celsius (°C)</option>
          <option value='Kelvin'>Kelvin (°K)</option>
        </select>
        <input id='input' type='number' />
        
        </div>
        <img id='convert' src={convert} alt="" />
        <div className="to">
        <h2>TO</h2>
        <select required id='second'>
          <option value='None' selected disabled>--None--</option>
          <option value='Farenheit'>Farenheit (°F)</option>
          <option value='Celsius'>Celsius (°C)</option>
          <option value='Kelvin'>Kelvin (°K)</option>
        </select>
        <input id='output' type='number' /></div></div>

        <button type="button" onClick={Change} id='button'>CONVERT</button>
      </form>

    </div>
  );
}

export default App;
