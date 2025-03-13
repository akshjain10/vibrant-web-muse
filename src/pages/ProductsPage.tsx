
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [category, setCategory] = useState<string | null>(null);
  
  // Categories for filter
  const categories = Array.from(new Set(products.map(product => product.category))).filter(Boolean);
  
  // Filter products by category
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our range of premium quality products made with the finest ingredients
            </p>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setCategory(null)}
                className={`px-6 py-2 rounded-full font-medium transition-colors
                  ${category === null ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
              >
                All Products
              </button>
              
              {categories.map((cat, index) => (
                <button 
                  key={index}
                  onClick={() => setCategory(cat as string)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors
                    ${category === cat ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    variant={product.variant}
                    className="h-full transition-transform hover:scale-105"
                  />
                </Link>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-sora font-medium text-gray-600">
                  No products found in this category
                </h3>
                <button 
                  onClick={() => setCategory(null)}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
