import React from 'react';

const StorePreview = () => {
  // Replace with actual product data
  const products = [
    { id: 1, name: 'Arduino Uno', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Raspberry Pi 4', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Soldering Iron Kit', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Store Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <a href="/store" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorePreview;
