import React from 'react';

const Testimonials = () => {
  // Replace with actual testimonial data
  const testimonials = [
    { id: 1, name: 'Client A', feedback: 'This company is the best. They delivered on time and exceeded my expectations.' },
    { id: 2, name: 'Client B', feedback: 'I am very happy with the final product. The team was very professional.' },
    { id: 3, name: 'Client C', feedback: 'I would recommend this company to anyone looking for quality work.' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <p className="italic">"{testimonial.feedback}"</p>
              <p className="font-bold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
