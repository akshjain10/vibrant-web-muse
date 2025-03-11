import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import ProductCard from '@/components/ProductCard';
import CertificationBadge from '@/components/CertificationBadge';
import { ArrowRight, CheckCircle2, MoveRight, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight mb-6">
              A FDA WHO-GMP Approved <span className="text-accent">Drugs</span> and <span className="text-accent">Cosmetics</span> Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium quality products for home care, personal care, and hygiene
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group">
                Product Catalog
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-primary border border-primary px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                Contact Us
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
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

      {/* About Section */}
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

      {/* Supply Chain Section */}
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

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sora font-bold mb-4">Our Products</h2>
            <p className="text-gray-600">Discover our range of premium quality products</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ProductCard 
              title="Phenola Citra" 
              description="A multipurpose cleaning & deodorizing solution made with special blend of Neem extract, Nilgiri oil, Citronella oil and Lemongrass."
              image="/lovable-uploads/Citra.png"
            />
            <ProductCard 
              title="Phenola Active Black" 
              description="Scientifically proven protection. Black Disinfectant Fluid, Phenolic Type. Kills 99.9% of germs & bacteria."
              image="/lovable-uploads/AB.png"
              variant="dark"
            />
            <ProductCard 
              title="Dr. White Herbal Floor Cleaner" 
              description="A multi-purpose Herbal Floor cleaner made with Pine oil, Eucalyptus & Lemon-grass Oil."
              image="/lovable-uploads/DW.png"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sora font-bold mb-4">Personal Care Products</h2>
            <p className="text-gray-600">Premium quality personal care solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              title="Formulae Body Oliv'Oil" 
              description="With goodness of Italian Olive Oil, natural herbs & extracts like Haridra, Arjuna, Manjistha, Karpoor & many more for versatile skin care."
              image="/lovable-uploads/b6438a4f-add5-4580-8b16-69777f056bc7.png"
            />
            <ProductCard 
              title="Formulae Hand Sanitizer" 
              description="Advanced Hand Sanitizer that kills 99.8% germs instantaneously without water with Aloe Vera extract."
              image="/lovable-uploads/f68fb996-0550-40f0-b87c-90a0b50b75dd.png"
              variant="dark"
            />
            <ProductCard 
              title="Eliza Beauty Gel" 
              description="A versatile Unisex Moisturizer Gel with goodness of Aloe Vera, Jojoba Oil, Rose Hydrosol and other Ayurvedic Actives."
              image="/lovable-uploads/b38f5131-7310-41d7-bb9e-c2814dcbea76.png"
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

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-sora font-bold mb-6">Quality Certifications</h2>
            <p className="text-gray-700 mb-8">
              At Esencia Overseas, we maintain the highest standards of quality in all our products and manufacturing processes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">WHO-GMP Certified</h3>
                  <p className="text-gray-600">Our manufacturing facilities adhere to the stringent standards set by the World Health Organization's Good Manufacturing Practices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">ISO 9001:2015 Certified</h3>
                  <p className="text-gray-600">We maintain a robust quality management system that meets international standards for consistency and customer satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">FDA Approved</h3>
                  <p className="text-gray-600">Our products comply with the regulations set by the Food and Drug Administration, ensuring safety and efficacy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">NABL Accredited Testing</h3>
                  <p className="text-gray-600">We partner with National Accreditation Board for Testing and Calibration Laboratories (NABL) accredited labs for quality testing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/10 -z-10 hidden lg:block"></div>
      </section>

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
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;
