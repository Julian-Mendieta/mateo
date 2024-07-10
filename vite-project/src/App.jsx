// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MisTurnos from './views/MisTurnos';
import Register from './views/Register';
import Login from './views/Login';
import Navbar from './components/Navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
