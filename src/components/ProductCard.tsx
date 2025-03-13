
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  id?: number;
  variant?: 'light' | 'dark';
  className?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  id,
  variant = 'light',
  className
}: ProductCardProps) => {
  return (
    <div className={cn(
      `rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 h-full
      ${variant === 'dark' ? 'bg-primary text-white' : 'bg-white'}`,
      className
    )}>
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-sora font-bold mb-3">{title}</h3>
        <p className={`${variant === 'dark' ? 'text-gray-200' : 'text-gray-600'} mb-4`}>{description}</p>
        {id ? (
          <Link to={`/product/${id}`} className={`${variant === 'dark' ? 'bg-white text-primary' : 'bg-primary text-white'} px-4 py-2 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2`}>
            Learn More
            <ArrowRight size={16} />
          </Link>
        ) : (
          <button className={`${variant === 'dark' ? 'bg-white text-primary' : 'bg-primary text-white'} px-4 py-2 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2`}>
            Learn More
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
