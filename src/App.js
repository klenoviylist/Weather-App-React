import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
          <img src="../images/earth.png" alt="earth-img"/>
      </header>
        <main>
            <Forecast />
        </main>
        <footer>
            Created by Natalia Shakhvorostova
            <div className="freepik">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    </div>
  );
}

export default App;
