import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
 
  
  const ScrollToTop = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 md:px-16 py-3">
        <p className="text-4xl font-bold text-blue-700 cursor-pointer" onClick={ScrollToTop}>StayShield</p>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
