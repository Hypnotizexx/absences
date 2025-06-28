import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const TEACHER_CREDENTIALS = {
  username: "teacher",
  password: "school123"
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === TEACHER_CREDENTIALS.username && 
        password === TEACHER_CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <input 
        type="text" 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}