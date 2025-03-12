
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-accent text-5xl font-sora font-bold mb-2">About us</h2>
            <p className="text-gray-700 mb-6">
              A FDA approved D & C manufacturing industry in India with state-of-the-art manufacturing facility situated in Silchar, Assam (India) with In-house Analytical laboratory and association with NABL accredited Laboratories for Quality check & assurance in compliance with the guidelines as per D&C Act, 1945 & Central Drugs Standard Control Organization (CDSCO) under the Directorate General of Health Services, Ministry of Health & Family Welfare, Government of India
            </p>
            <h3 className="text-3xl font-sora font-bold mb-2">
              Our <span className="text-green-500">Quality</span> Control <span className="text-gray-700">Engineering</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Esencia has built a robust team & associates of technical experts of various domains – cosmetology, pharmacology, Toxicology, Process Engineering, Mechatronics, electrical & Electronics engineering for Production development, Ayurveda, Nutraceutical, food processing and allied sectors.
            </p>
            <p className="text-gray-700 mb-6">
              Scientist with over 32 years of experience in production & product development in Personal Care & hygiene industry; Chief scientist with more than 20 years of experience in Research & Management of Natural & Organic cosmetics in accordance with BDIH Bundesverband Der Industrie-und Handelsunternehmen (Germany), ECO-CERT® & Vegan guidelines.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-primary/90 transition-all group">
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div>
            <img 
              src="/lovable-uploads/5d4c7340-575a-4c1c-bc76-39a780452bc6.png" 
              alt="Quality Control Lab" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
