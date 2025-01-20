import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation for email
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email format' });
    } else if (name === 'email') {
      const { email, ...rest } = errors;
      setErrors(rest);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.email || !formData.password) {
      setErrors({ form: 'All fields are required' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: 'Invalid email format' });
      return;
    }

    // Reset errors and simulate login
    setErrors({});
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard or home page
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow rounded" style={{ width: '300px' }} onSubmit={handleSubmit}>
        <div className="form-group text-center mb-4">
          <h1>LOGIN</h1>
        </div>

        {/* Email Input */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        {/* Password Input */}
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {errors.form && <div className="text-danger mb-3">{errors.form}</div>}

        {/* Submit Button */}
        <div className="form-group text-center mb-3">
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'LOGIN'}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="form-group text-center mb-3">
          <p>
            <Link to="/forgot-password" className="text-primary">
              Forgot your password?
            </Link>
          </p>
        </div>

        {/* Register Redirect */}
        <div className="form-group text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-primary">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
