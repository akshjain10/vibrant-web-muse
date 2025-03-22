
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Product, ProductSizeOption } from '@/data/products';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<ProductSizeOption | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [api, setApi] = useState<CarouselApi>();
  
  // Use product gallery or create a gallery with the main image
  const gallery = product.gallery || [{ id: 1, url: product.image, alt: product.title }];

  // Set initial selected size when product loads
  useEffect(() => {
    if (product.sizeOptions && product.sizeOptions.length > 0) {
      setSelectedSize(product.sizeOptions[0].size);
      setSelectedOption(product.sizeOptions[0]);
    } else {
      setSelectedSize(null);
      setSelectedOption(null);
    }
    
    // Reset active image to 0
    setActiveImage(0);
    
    // Also reset carousel position when product changes
    if (api) {
      api.scrollTo(0);
    }
  }, [product.id, api, product.sizeOptions]);

  // Handle carousel API init and events
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveImage(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Handle size selection change
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    const option = product.sizeOptions?.find(option => option.size === size) || null;
    setSelectedOption(option);
  };

  const handleImageClick = (index: number) => {
    setActiveImage(index);
    // Also move carousel to this image
    if (api) {
      api.scrollTo(index);
    }
  };

  // Format price with Indian Rupee symbol
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
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
          {/* Desktop View - Using Carousel */}
          <div className="hidden md:block w-full">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {gallery.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="bg-gray-50 rounded-xl p-4 h-[500px] flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          {/* Mobile Carousel View */}
          <div className="block md:hidden w-full">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {gallery.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="bg-gray-50 rounded-xl p-4 h-80 flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          {gallery.length > 1 && (
            <div className="hidden md:flex gap-4 overflow-x-auto pb-2">
              {gallery.map((image, index) => (
                <div 
                  key={image.id}
                  onClick={() => handleImageClick(index)}
                  className={`w-20 h-20 cursor-pointer rounded-lg overflow-hidden ${
                    activeImage === index 
                      ? 'border-2 border-primary ring-2 ring-primary/30 shadow-md' 
                      : 'border-2 border-transparent hover:border-gray-300'
                  } transition-all duration-200 p-1`}
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
          
          {/* Size options selection */}
          {product.sizeOptions && product.sizeOptions.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-sora font-bold mb-4">Available Sizes</h2>
              
              {/* Mobile dropdown for sizes */}
              <div className="block md:hidden mb-4">
                <Select 
                  value={selectedSize || undefined} 
                  onValueChange={handleSizeChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizeOptions.map((option) => (
                      <SelectItem key={option.size} value={option.size}>
                        {option.size} - {formatPrice(option.price || 0)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Desktop radio buttons for sizes */}
              <div className="hidden md:block">
                <RadioGroup 
                  value={selectedSize || undefined} 
                  onValueChange={handleSizeChange}
                  className="flex flex-wrap gap-4"
                >
                  {product.sizeOptions.map((option) => (
                    <div 
                      key={option.size}
                      className={`flex items-center gap-2 px-4 py-3 border rounded-md cursor-pointer transition-all ${
                        selectedSize === option.size 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <RadioGroupItem value={option.size} id={option.size} className="sr-only" />
                      <div className="flex flex-col">
                        <span className="font-medium">{option.size}</span>
                        <span className="text-primary font-semibold">
                          {formatPrice(option.price || 0)}
                        </span>
                        {option.stock && option.stock <= 5 && (
                          <span className="text-xs text-red-500">
                            Only {option.stock} left
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}
          
          {/* Selected size price */}
          {selectedOption && (
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(selectedOption.price || 0)}
                </span>
                {selectedOption.stock && selectedOption.stock <= 5 && (
                  <span className="text-sm text-red-500 bg-red-50 px-2 py-1 rounded">
                    Only {selectedOption.stock} left
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Add to cart button */}
          <button 
            className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            disabled={!selectedOption || (selectedOption.stock && selectedOption.stock === 0)}
          >
            <ShoppingBag size={18} />
            <span>Add to Cart</span>
          </button>
          
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
