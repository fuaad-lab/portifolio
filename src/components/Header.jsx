import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">DevPortfolio</h1>

      <div className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/service">Service</Link>
      </div>

      <button className="bg-blue-500 px-4 py-2 rounded">Lets Talk</button>
    </div>
  )
}

export default Header;
