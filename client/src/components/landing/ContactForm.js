import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
