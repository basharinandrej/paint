import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div className="app">
        <Tools />
        <Canvas />
    </div>
  );
}

export default App;
