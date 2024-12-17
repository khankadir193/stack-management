import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter } from 'react-router-dom';
import StackContent from './Components/StackContent';

function App() {
  

  return (
    <div className="app">
    <StackContent /> 
    </div>
  );
}

export default App;
