import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation(); // detects route changes

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('user'));
      setUserData(stored);
    } catch (err) {
      console.error('Invalid token format:', err.message);
      setUserData(null);
    }
  }, [location]); // rerun every time the route changes

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const token = userData?.token;
  const role = userData?.role;
  const dashboardPath = role === 'landlord' ? '/landlord/dashboard' : '/tenant/dashboard';

  return (
    <div>
      <ul className='flex py-2'>
        <Link to="/" onClick={ScrollToTop}>
          <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>Home</li>
        </Link>
        <Link to="/properties">
          <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>Properties</li>
        </Link>
        <Link to="/How-it-works">
          <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>How It Works</li>
        </Link>
        <Link to="/services">
          <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>Services</li>
        </Link>
        <Link to="/faq">
          <li className='mx-4 cursor-pointer py-2 font-semibold text-lg hover:underline'>FAQs</li>
        </Link>

        {token ? (
          <Link to={dashboardPath}>
            <button className='mx-4 cursor-pointer border px-4 py-2 rounded-lg font-semibold text-gray-900 hover:bg-black hover:text-white'>
              Dashboard
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className='mx-4 cursor-pointer border px-4 py-2 rounded-lg font-semibold text-gray-900 hover:bg-black hover:text-white'>
              Log In
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
