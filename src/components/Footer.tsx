
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-300">
              A FDA WHO-GMP approved Drugs and Cosmetics Industry providing premium quality products for healthcare and wellness.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#quality" className="text-gray-300 hover:text-white transition-colors">Quality Control</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Care & Hygiene</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personal Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Disinfectants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Beauty Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ayurvedic Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <span>Oberoi Garden City, Goregaon East(D2), Mumbai - 400063, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span>+91 22 4880 8712, Extn: 1212</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <span>info@esenciaindia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>© 2024 Esencia Overseas. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Information in this website are intellectual property of Esencia Overseas | DO NOT COPY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
