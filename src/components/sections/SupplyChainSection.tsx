
import React from 'react';

const SupplyChainSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-bold mb-2">
            Our <span className="text-accent">Supply</span> Chain associates
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To ensure quality consistency and standards, we are associates with some of the renowned business houses dealing with ABDOS, Piramal, Petrochem limited, Godrej Chemicals, Lubrizol USA, Gujarat Alkalies and Chemicals limited etc. for supply of raw materials with Indian Pharmacopoeia, British Pharmacopoeia & US Pharmacopoeia Standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-sora text-gray-700 mb-4">Vision</h3>
            <p className="text-gray-600 italic">
              "We desire to accomplish business excellence through the highest standard of ethics, advanced manufacturing & management practices, assuring the best quality product & services, innovation, productivity and customer satisfaction, helping our partners to achieve their core business objectives"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-sora text-gray-700 mb-4">Mission</h3>
            <p className="text-gray-600">
              "To be a leading Manufacturer, Channel <span className="text-accent font-medium">Partner, Supplier & Exporter</span> of distinctive chemical based APIs and Pharmaceuticals, Ayurvedic products and R&D services; A supply chain company of <span className="text-green-600 font-medium">Organic agro-based produces and food processing items</span> ensuring a quality workmanship towards <span className="text-accent font-medium">healthcare & Wellness</span> in daily life"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;
