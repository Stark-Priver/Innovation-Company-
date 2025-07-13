import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">1. Idea</h3>
            <p>Share your project idea with us.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">2. Design</h3>
            <p>We create a detailed design and plan.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">3. Feedback</h3>
            <p>You provide feedback and we iterate.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">4. Delivery</h3>
            <p>We deliver the final product.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
