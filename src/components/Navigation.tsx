
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`lg:flex items-center gap-8 ${
          isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-white p-6 shadow-lg flex flex-col items-start gap-4' 
            : 'hidden lg:flex'
        }`}>
          {isHomePage ? (
            <>
              <a href="#home" className="font-medium hover:text-white transition-colors">Home</a>
              <a href="#products" className="font-medium hover:text-white transition-colors">Products</a>
              <a href="#about" className="font-medium hover:text-white transition-colors">About Us</a>
            </>
          ) : (
            <>
              <Link to="/" className="font-medium hover:text-white transition-colors">Home</Link>
              <Link to="/products" className="font-medium hover:text-white transition-colors">Products</Link>
              <Link to="/#about" className="font-medium hover:text-white transition-colors">About Us</Link>
            </>
          )}
          <Link to={isHomePage ? "#contact" : "/#contact"} className={isHomePage ? "font-medium hover:text-primary/90 transition-colors bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90" : "font-medium hover:text-primary/90 transition-colors bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90"}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
