import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Registration.css';

const Registration = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const username = form.username.trim();
    if (!username) newErrors.username = 'Username is required';
    else if (username.length < 3) newErrors.username = 'Username must be at least 3 characters';
    else if (/\d/.test(username)) newErrors.username = 'Username cannot contain numbers';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const passwordsMatch = form.password && form.confirmPassword && form.password === form.confirmPassword;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear errors for the field while typing
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setServerError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // submit to json-server
      setSubmitting(true);
      try {
        const res = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: form.username,
            email: form.email,
            password: form.password
          })
        });
        if (!res.ok) throw new Error('Network response was not ok');
        // on success navigate to login
        navigate('/login');
      } catch (err) {
        setServerError('Failed to register. Is json-server running on http://localhost:3001 ?');
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} aria-invalid={!!errors.username} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            aria-invalid={!!errors.password}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            aria-invalid={!!errors.confirmPassword}
            className={form.confirmPassword ? (passwordsMatch ? 'match' : 'no-match') : ''}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        {serverError && <div className="error" role="alert">{serverError}</div>}
        <button type="submit" disabled={submitting}>{submitting ? 'Registering...' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Registration;
