import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 md:px-16 py-3">
        <p className="text-2xl font-bold text-gray-800 cursor-pointer">StayShield</p>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
