import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StackContent from './Components/StackContent';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
