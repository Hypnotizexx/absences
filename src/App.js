import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Login from './Login'; // Corrected path
import Dashboard from './Dashboard'; // Corrected path

function App() {
  return (
    <BrowserRouter>
      <div className="app"> {/* Added for gradient background */}
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