import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white text-center p-20">
      <h1 className="text-5xl font-bold mb-4">Build Your Future with Us</h1>
      <p className="text-xl mb-8">We help you bring your ideas to life, from concept to reality.</p>
      <div className="space-x-4">
        <a href="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Your Project
        </a>
        <a href="/store" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </a>
        <a href="/courses" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Learn With Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
