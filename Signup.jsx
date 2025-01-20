import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Real-time validation
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else if (name === 'email') {
      const { email, ...rest } = errors;
      setErrors(rest);
    }

    if (name === 'confirmPassword' && value !== formData.password) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
    } else if (name === 'confirmPassword') {
      const { confirmPassword, ...rest } = errors;
      setErrors(rest);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrors({ ...errors, form: 'All fields are required' });
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }

    // Check if terms are agreed
    if (!formData.agreedToTerms) {
      setErrors({ ...errors, terms: 'You must agree to the terms and conditions' });
      return;
    }

    setErrors({});
    alert('Form submitted successfully');
    console.log('Signup form data:', formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow rounded" style={{ width: '400px' }} onSubmit={handleSubmit}>
        <div className="form-group text-center mb-4">
          <h1>REGISTER</h1>
        </div>

        {/* Name Input */}
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
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

        {/* Confirm Password Input */}
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="form-group mb-3">
          <input
            type="checkbox"
            id="terms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
          />
          <label htmlFor="terms" className="ms-2">
            I agree to the{' '}
            <Link to="/terms" className="text-primary">
              Terms & Conditions
            </Link>
          </label>
          {errors.terms && <small className="text-danger d-block">{errors.terms}</small>}
        </div>

        {/* Error Message */}
        {errors.form && <div className="text-danger mt-3">{errors.form}</div>}

        {/* Submit Button */}
        <div className="form-group text-center mb-3">
          <button type="submit" className="btn btn-primary w-100">
            REGISTER
          </button>
        </div>

        {/* Login Redirect */}
        <div className="form-group text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
