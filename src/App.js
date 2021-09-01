import React, { cloneElement } from 'react';
import WeatherApp from './components/WeatherApp';
import './App.css';
import './components/css/style.css'

function App() {
  return (
    <>
      <div className="parent">
        <WeatherApp />
      </div>
      <footer>
        Made with &hearts; by Ashish Verma
      </footer>
    </>
  );
}

export default App;
