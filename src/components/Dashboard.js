import React, { Component } from 'react';
import '../App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="app">
        <div className="card">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Absence Management Dashboard</h2>
          <p className="text-white mb-4">Welcome to your absence management dashboard.</p>
          <div className="flex justify-center">
            <button
              className="py-2 px-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-md hover:from-[#764ba2] hover:to-[#667eea] transition duration-300"
            >
              View Absences
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;