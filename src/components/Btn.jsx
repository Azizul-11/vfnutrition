import React from 'react';
import { ArrowRight } from 'lucide-react';

import img1 from '../assets/one.jpeg';
import img2 from '../assets/two.jpeg';
import img3 from '../assets/three.jpeg';
import img4 from '../assets/four.jpeg';
import img5 from '../assets/five.jpeg';
import img6 from '../assets/six.jpeg';
import img7 from '../assets/seven.jpeg';
import img8 from '../assets/eight.jpeg';



const Btn = () => {
  const products = [
    {
      image: img1,
      name: 'UNIZINK',
    }, 
    {
      image: img2,
      name: 'UNIVIROSAFE',
    }, 
    {
      image: img3,
      name: 'UNIFAT',
    },  
    {
      image: img4,
      name: 'UNINEPH',
    }, 
    {
      image: img5,
      name: 'UNICAL',
    }, 
    {
      image: img6,
      name: 'UNIVIT',
    },  
    {
      image: img7,
      name: 'LIVGUARD',
    },  
    {
      image: img8,
      name: 'UNI-HEAT',
    },  
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Export Products & Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive veterinary care tailored to meet all your pet's health and wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-fill group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Btn;
