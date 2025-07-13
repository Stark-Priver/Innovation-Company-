import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>We are a company dedicated to providing the best services and products.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
