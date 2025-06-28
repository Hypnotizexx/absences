import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;