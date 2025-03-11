
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  variant?: 'light' | 'dark';
}

const ProductCard = ({ title, description, image, variant = 'light' }: ProductCardProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${variant === 'dark' ? 'bg-primary text-white' : 'bg-white'}`}>
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-sora font-bold mb-3">{title}</h3>
        <p className={`${variant === 'dark' ? 'text-gray-200' : 'text-gray-600'} mb-4`}>{description}</p>
        <button className={`${variant === 'dark' ? 'bg-white text-primary' : 'bg-primary text-white'} px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
