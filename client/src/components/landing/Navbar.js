import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/">Your Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="/courses" className="hover:text-gray-400">Courses</a></li>
          <li><a href="/store" className="hover:text-gray-400">Store</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
