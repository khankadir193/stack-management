import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StackContent from './Components/StackContent';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/kadir' element={<StackContent />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
