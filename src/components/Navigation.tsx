
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-sora font-bold">LOGO</a>
        
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`lg:flex items-center gap-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-6 shadow-lg' : 'hidden lg:flex'}`}>
          <a href="#features" className="font-medium hover:text-gray-600 transition-colors">Features</a>
          <a href="#about" className="font-medium hover:text-gray-600 transition-colors">About</a>
          <a href="#contact" className="font-medium hover:text-gray-600 transition-colors">Contact</a>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
