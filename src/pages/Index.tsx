import React from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import ProductCarousel from '@/components/ProductCarousel';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SupplyChainSection from '@/components/sections/SupplyChainSection';
import QualitySection from '@/components/sections/QualitySection';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const homeProducts = [
  {
    id: 1,
    title: "Phenola Citra", 
    description: "A multipurpose cleaning & deodorizing solution made with special blend of Neem extract, Nilgiri oil, Citronella oil and Lemongrass.",
    image: "/lovable-uploads/Citra.png"
  },
  {
    id: 2,
    title: "Phenola Active Black", 
    description: "Scientifically proven protection. Black Disinfectant Fluid, Phenolic Type. Kills 99.9% of germs & bacteria.",
    image: "/lovable-uploads/AB.png",
    variant: "dark" as const
  },
  {
    id: 3,
    title: "Dr. White Herbal Floor Cleaner", 
    description: "A multi-purpose Herbal Floor cleaner made with Pine oil, Eucalyptus & Lemon-grass Oil.",
    image: "/lovable-uploads/DW.png"
  },
  {
      id: 4,
      title: "Eliza Beauty Gel",
      description: "A versatile Unisex Moisturizer Gel with goodness of Aloe Vera, Jojoba Oil, Rose Hydrosol and other Ayurvedic Actives.",
      image: "/lovable-uploads/b38f5131-7310-41d7-bb9e-c2814dcbea76.png"
    }
];

const personalCareProducts = [
  {
    id: 1,
    title: "Formulae Body Oliv'Oil", 
    description: "With goodness of Italian Olive Oil, natural herbs & extracts like Haridra, Arjuna, Manjistha, Karpoor & many more for versatile skin care.",
    image: "/lovable-uploads/b6438a4f-add5-4580-8b16-69777f056bc7.png"
  },
  {
    id: 2,
    title: "Formulae Hand Sanitizer", 
    description: "Advanced Hand Sanitizer that kills 99.8% germs instantaneously without water with Aloe Vera extract.",
    image: "/lovable-uploads/f68fb996-0550-40f0-b87c-90a0b50b75dd.png",
    variant: "dark" as const
  },
  {
    id: 3,
    title: "Eliza Beauty Gel", 
    description: "A versatile Unisex Moisturizer Gel with goodness of Aloe Vera, Jojoba Oil, Rose Hydrosol and other Ayurvedic Actives.",
    image: "/lovable-uploads/b38f5131-7310-41d7-bb9e-c2814dcbea76.png"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SupplyChainSection />
      
      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ProductCarousel 
            products={homeProducts} 
            title="Our Products" 
            description="Discover our range of premium quality products"
          />
          
          <div className="mt-32">
            <ProductCarousel 
              products={personalCareProducts} 
              title="Personal Care Products" 
              description="Premium quality personal care solutions"
            />
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-primary/90 transition-all group">
              View All Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <QualitySection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sora font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">Contact us for business inquiries or product information</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-sora font-bold mb-6">Corporate Address</h3>
              <p className="text-gray-700 mb-8">
                Oberoi Commerz II, CTS No. 95, Off. W.E. Highway, Oberoi Garden City, Goregaon East (D2), Mumbai - 400063, Maharashtra, INDIA
              </p>
              
              <h3 className="text-2xl font-sora font-bold mb-6">Manufacturing Unit</h3>
              <p className="text-gray-700 mb-8">
                Rongpur part - II, (Imphal road), near CWC, Silchar, District Cachar, Assam - 788009, INDIA
              </p>
              
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-xl font-sora font-bold mb-4">Business Enquiry</h3>
                <p className="text-gray-700 mb-4">
                  For Business enquiry, please reach us at
                </p>
                <p className="flex items-center gap-3 mb-2">
                  <Mail className="text-primary" size={18} />
                  <span>info@esenciaindia.com</span>
                </p>
                <p className="flex items-center gap-3 mb-2">
                  <Phone className="text-primary" size={18} />
                  <span>+91 22 4880 8712, Extn: 1212</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-primary" size={18} />
                  <span>Mob: +91 60030 77601</span>
                </p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
