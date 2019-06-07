import React from 'react';
import Login from './Login/Login';
import Registro from './Registro/Registro'
import './App.css';

function App() {
  const myName="Lizette";
  return (
    <div className="App">
      <Login name={myName}/>
    </div>
  );
}

export default App;
