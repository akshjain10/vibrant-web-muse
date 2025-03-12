
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, products.length - 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, products.length - 3) : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-sora font-bold mb-4">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-primary" />
        </button>
        
        <div className="overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className={cn(
                  "min-w-full md:min-w-[33.33%] px-4 transition-opacity duration-300",
                )}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  variant={product.variant}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="text-primary" />
        </button>
      </div>
      
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === Math.floor(currentIndex / 3) ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
