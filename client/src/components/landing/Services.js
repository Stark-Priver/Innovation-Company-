import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Project Design</h3>
            <p>We design your projects from scratch with a focus on quality and innovation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">Research & Reports</h3>
            <p>We provide detailed research and reports to help you make informed decisions.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Online Courses</h3>
            <p>Learn from our experts through our comprehensive online courses.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-bold mb-2">Electronics Store</h3>
            <p>Get the best electronic components and tools from our online store.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
