import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState('tenant');
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); 

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setErrorMessage(''); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); 
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setErrorMessage(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const baseUrl = `http://localhost:5000/api/${role}`;
    const endpoint = isSignup ? `${baseUrl}/signup` : `${baseUrl}/login`;
  
    const payload = isSignup
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      : {
          email: formData.email,
          password: formData.password,
        };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      console.log(result);
  
      if (!response.ok) throw new Error(result.message || 'Something went wrong');
  
      alert(`${isSignup ? 'Signup' : 'Login'} successful!`);
  
      localStorage.setItem('token', result?.token); 
      localStorage.setItem('role', role); 
  
      if (role === 'tenant') {
        navigate('/admin/profile');
      } else if (role === 'landlord') {
        navigate('/landlord/dashboard');
      }
  
      setErrorMessage('');
  
    } catch (error) {
      console.error('❌ Error:', error.message);
      setErrorMessage(error.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        <div className="flex justify-center mb-6 gap-6">
          <label className="flex items-center space-x-2">
            <input type="radio" value="tenant" checked={role === 'tenant'} onChange={handleRoleChange} className="accent-indigo-600" />
            <span>Tenant</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" value="landlord" checked={role === 'landlord'} onChange={handleRoleChange} className="accent-indigo-600" />
            <span>Landlord</span>
          </label>
        </div>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-100 p-2 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your full name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isSignup ? 'Already have an account?' : 'New user?'}{' '}
          <button onClick={toggleMode} className="text-indigo-600 hover:underline">
            {isSignup ? 'Login' : 'Create account'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
