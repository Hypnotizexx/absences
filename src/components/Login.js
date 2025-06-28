import React, { Component } from 'react';
import './Login.css';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToDashboard: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        this.setState({ redirectToDashboard: true });
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  render() {
    if (this.state.redirectToDashboard) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className="login">
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-md hover:from-[#764ba2] hover:to-[#667eea] transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;