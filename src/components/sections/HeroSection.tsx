
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CertificationBadge from '../CertificationBadge';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/4a407f4e-8195-41e5-86f8-016599565b52.png" 
          alt="Esencia Overseas Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight mb-6">
            Quality Home Care with <span className="text-accent">Premium</span> Products
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Providing FDA WHO-GMP approved solutions for your home and personal care needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group">
              Product Catalog
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-primary border border-primary px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              Contact Us
            </button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8">
            <CertificationBadge 
              title="WHO-GMP Certified" 
              image="/lovable-uploads/gmp.jpg"
            />
            <CertificationBadge 
              title="ISO 9001:2015" 
              image="/lovable-uploads/iso.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
