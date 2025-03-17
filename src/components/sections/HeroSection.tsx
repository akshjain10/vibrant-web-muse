
import React from 'react';
import CertificationBadge from '../CertificationBadge';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/uploads/4a407f4e-8195-41e5-86f8-016599565b52.png"
          alt="Esencia Overseas Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight mb-6">
            <span className="text-accent">Premium</span> Home Care Products
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Providing FDA WHO-GMP approved solutions for your home and personal care needs
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-start gap-8">
            <CertificationBadge 
              title="WHO-GMP Certified" 
              image="/uploads/gmp.jpg"
            />
            <CertificationBadge 
              title="ISO 9001:2015" 
              image="/uploads/iso.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
