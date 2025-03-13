
import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '@/data/products';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  
  // Use product gallery or create a gallery with the main image
  const gallery = product.gallery || [{ id: 1, url: product.image, alt: product.title }];

  const handleImageClick = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 overflow-hidden h-80 md:h-[500px]">
            <img 
              src={gallery[activeImage].url} 
              alt={gallery[activeImage].alt} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {gallery.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {gallery.map((image, index) => (
                <div 
                  key={image.id}
                  onClick={() => handleImageClick(index)}
                  className={`w-20 h-20 cursor-pointer rounded-lg overflow-hidden border-2 p-1
                    ${activeImage === index ? 'border-primary' : 'border-transparent'}
                  `}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-sora font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg">{product.description}</p>
          </div>
          
          {product.detailedDescription && (
            <div>
              <h2 className="text-xl font-sora font-bold mb-2">About This Product</h2>
              <p className="text-gray-700">{product.detailedDescription}</p>
            </div>
          )}
          
          {product.features && product.features.length > 0 && (
            <div>
              <h2 className="text-xl font-sora font-bold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="text-primary mt-1 shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div>
              <h2 className="text-xl font-sora font-bold mb-3">Specifications</h2>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 border-b border-gray-100 py-2">
                    <div className="font-medium text-gray-700">{key}</div>
                    <div>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
