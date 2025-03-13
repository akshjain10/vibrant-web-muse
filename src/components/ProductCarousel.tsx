
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  variant?: 'light' | 'dark';
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  description?: string;
}

const ProductCarousel = ({ products, title, description }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Loop back to beginning when reaching the end
      return nextIndex >= products.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      // Loop back to end when at the beginning
      return nextIndex < 0 ? products.length - 1 : nextIndex;
    });
  };

  // Create a circular array for smooth looping
  const getVisibleProducts = () => {
    const result = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    return result;
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-sora font-bold mb-4">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-6 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-primary" size={20} />
        </button>
        
        <div className="overflow-hidden px-4">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleProducts().map((product, idx) => (
              <div 
                key={`${product.id}-${idx}`} 
                className={cn(
                  "px-2 md:px-4 transition-all duration-300",
                  slidesToShow === 1 ? "w-full" : slidesToShow === 2 ? "w-1/2" : "w-1/3"
                )}
              >
                <Link to={`/product/${product.id}`}>
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    variant={product.variant}
                    className="h-full"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-6 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="text-primary" size={20} />
        </button>
      </div>
      
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: products.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
