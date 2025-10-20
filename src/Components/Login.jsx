import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Login.css';
import { useAuth } from './Home/AuthContext.jsx';



const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    (async () => {
      if (!form.username.trim() || !form.password) {
        setError('Please enter username and password');
        return;
      }
      setError('');
      try {
        const res = await fetch(
          `http://localhost:3001/users?username=${encodeURIComponent(form.username)}&password=${encodeURIComponent(form.password)}`
        );
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          login(form.username);
          navigate('/home');
        } else {
          setError('Invalid username or password');
        }
      } catch (err) {
        console.error(err);
        setError('Login failed. Is json-server running on http://localhost:3001 ?');
      }
    })();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
