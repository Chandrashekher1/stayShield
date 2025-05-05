import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px- grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-semibold mb-4">About StayShield</h4>
          <p className="text-lg">
          StayShield leverages AI and blockchain to streamline rental agreements, ensuring secure, transparent, and fair processes for both landlords and tenants.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-blue-600 text-lg">Home</a></li>
            <li><a href="/How-it-works" className="hover:text-blue-600 text-lg">How It Works</a></li>
            <li><a href="#" className="hover:text-blue-600 text-lg">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-blue-600 text-lg" >FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-lg">
            📧 Email: support@StayShield.com <br />
            📍 Location: New Delhi, India
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
            <a href="#" className="hover:text-blue-500">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xl text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} StayShield. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
