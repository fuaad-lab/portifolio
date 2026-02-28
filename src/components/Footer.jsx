import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Fuad Ibrahin. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;