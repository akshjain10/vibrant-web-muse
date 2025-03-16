
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import ProductCarousel from '@/components/ProductCarousel';
import { getProductsByCategory } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [key, setKey] = useState(Date.now());
  
  // Convert id to number and find product
  const productId = id ? parseInt(id, 10) : 0;
  const product = getProductById(productId);
  
  // Get related products from the same category, limit to max 3 products
  const relatedProducts = product ? 
    getProductsByCategory(product.category || '')
      .filter(p => p.id !== product.id)
      .slice(0, 3) : 
    [];
  
  // Scroll to top and reset key when id changes for complete remount
  useEffect(() => {
    window.scrollTo(0, 0);
    setKey(Date.now()); // Force remount of children components when product changes
  }, [id]);
  
  // Redirect to products page if product not found
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  if (!product) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="py-10">
          <ProductDetail key={key} product={product} />
        </section>
        
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <ProductCarousel 
                products={relatedProducts} 
                title="Related Products" 
                description="You may also be interested in these products"
              />
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
