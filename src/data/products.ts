
export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  variant?: 'light' | 'dark';
  gallery?: ProductImage[];
  features?: string[];
  specifications?: Record<string, string>;
  category?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Phenola Citra", 
    description: "A multipurpose cleaning & deodorizing solution made with special blend of Neem extract, Nilgiri oil, Citronella oil and Lemongrass.",
    image: "/lovable-uploads/Citra.png",
    detailedDescription: "Phenola Citra is our premium multi-purpose cleaning and deodorizing solution crafted with a special blend of natural extracts. The unique combination of Neem extract, Nilgiri oil, Citronella oil, and Lemongrass provides powerful cleaning action while leaving a refreshing, natural fragrance.",
    gallery: [
      { id: 1, url: "/lovable-uploads/Citra.png", alt: "Phenola Citra bottle front view" },
      { id: 2, url: "/lovable-uploads/DB.png", alt: "Phenola Citra usage example" },
      { id: 3, url: "/lovable-uploads/pi.png", alt: "Phenola Citra ingredients" }
    ],
    features: [
      "Made with natural extracts",
      "Powerful cleaning action",
      "Pleasant citrus fragrance",
      "Kills 99.9% of germs",
      "Safe for household surfaces",
      "Eco-friendly formula"
    ],
    specifications: {
      "Contents": "Neem extract, Nilgiri oil, Citronella oil, Lemongrass",
      "Available Sizes": "250ml, 500ml, 1L",
      "Usage": "Floors, bathrooms, kitchens, and general surfaces",
      "Shelf Life": "24 months from manufacturing date"
    },
    category: "Home Care"
  },
  {
    id: 2,
    title: "Phenola Active Black", 
    description: "Scientifically proven protection. Black Disinfectant Fluid, Phenolic Type. Kills 99.9% of germs & bacteria.",
    image: "/lovable-uploads/AB.png",
    variant: "dark",
    detailedDescription: "Phenola Active Black is our advanced disinfectant fluid formulated with phenolic compounds that provide scientifically proven protection against germs and bacteria. Its powerful formula kills 99.9% of harmful microorganisms, making it ideal for maintaining hygiene in homes and commercial spaces.",
    gallery: [
      { id: 1, url: "/lovable-uploads/AB.png", alt: "Phenola Active Black bottle front view" },
      { id: 2, url: "/lovable-uploads/DB.png", alt: "Phenola Active Black in use" },
      { id: 3, url: "/lovable-uploads/pi.png", alt: "Phenola Active Black features" }
    ],
    features: [
      "Kills 99.9% of germs and bacteria",
      "Long-lasting protection",
      "Scientifically tested formula",
      "Ideal for daily disinfection",
      "Effectively eliminates odor-causing bacteria",
      "Professional-grade disinfection"
    ],
    specifications: {
      "Active Ingredients": "Phenolic compounds",
      "Available Sizes": "250ml, 500ml, 1L, 5L",
      "Application": "General disinfection, bathroom and kitchen sanitization",
      "Shelf Life": "36 months from manufacturing date"
    },
    category: "Home Care"
  },
  {
    id: 3,
    title: "Dr. White Herbal Floor Cleaner", 
    description: "A multi-purpose Herbal Floor cleaner made with Pine oil, Eucalyptus & Lemon-grass Oil.",
    image: "/lovable-uploads/DW.png",
    detailedDescription: "Dr. White Herbal Floor Cleaner is a multi-purpose cleaning solution crafted with natural herbal extracts. The special blend of Pine oil, Eucalyptus, and Lemongrass Oil not only cleans effectively but also leaves a refreshing herbal fragrance that revitalizes your space. Ideal for all types of floors, this cleaner removes dirt, stains, and odors while being gentle on surfaces.",
    gallery: [
      { id: 1, url: "/lovable-uploads/DW.png", alt: "Dr. White Herbal Floor Cleaner bottle" },
      { id: 2, url: "/lovable-uploads/DB.png", alt: "Dr. White Herbal Floor Cleaner in use" },
      { id: 3, url: "/lovable-uploads/pi.png", alt: "Dr. White Herbal Floor Cleaner ingredients" }
    ],
    features: [
      "Made with natural herbal extracts",
      "Effective against tough stains",
      "Long-lasting fresh fragrance",
      "Safe for all floor types",
      "Concentrated formula for economic usage",
      "No harmful chemical residue"
    ],
    specifications: {
      "Ingredients": "Pine oil, Eucalyptus oil, Lemongrass oil",
      "Available Sizes": "500ml, 1L, 5L",
      "Application": "All types of floors including marble, granite, ceramic, and wood",
      "Dilution Ratio": "1 cap in 1 bucket (10L) of water"
    },
    category: "Home Care"
  },
  {
    id: 4,
    title: "Eliza Beauty Gel",
    description: "A versatile Unisex Moisturizer Gel with goodness of Aloe Vera, Jojoba Oil, Rose Hydrosol and other Ayurvedic Actives.",
    image: "/lovable-uploads/b38f5131-7310-41d7-bb9e-c2814dcbea76.png",
    detailedDescription: "Eliza Beauty Gel is a versatile unisex moisturizer crafted with a blend of natural ingredients and Ayurvedic actives. This lightweight, non-greasy gel formula enriched with Aloe Vera, Jojoba Oil, and Rose Hydrosol provides deep hydration while balancing skin's natural moisture. Suitable for all skin types, it helps improve skin texture, reduce blemishes, and protect from environmental damage.",
    gallery: [
      { id: 1, url: "/lovable-uploads/b38f5131-7310-41d7-bb9e-c2814dcbea76.png", alt: "Eliza Beauty Gel package" },
      { id: 2, url: "/lovable-uploads/273d3e1b-4591-4b8f-8abb-a1351211a840.png", alt: "Eliza Beauty Gel texture" },
      { id: 3, url: "/lovable-uploads/4a407f4e-8195-41e5-86f8-016599565b52.png", alt: "Eliza Beauty Gel ingredients" }
    ],
    features: [
      "Ayurvedic formula with natural ingredients",
      "Suitable for all skin types",
      "Lightweight and non-greasy",
      "Hydrates and nourishes skin",
      "Improves skin texture and tone",
      "Unisex formula for everyone"
    ],
    specifications: {
      "Active Ingredients": "Aloe Vera, Jojoba Oil, Rose Hydrosol, Ayurvedic extracts",
      "Available Sizes": "100g, 250g",
      "Application": "Face and body moisturization",
      "Skin Type": "All skin types"
    },
    category: "Personal Care"
  },
  {
    id: 5,
    title: "Formulae Body Oliv'Oil", 
    description: "With goodness of Italian Olive Oil, natural herbs & extracts like Haridra, Arjuna, Manjistha, Karpoor & many more for versatile skin care.",
    image: "/lovable-uploads/b6438a4f-add5-4580-8b16-69777f056bc7.png",
    detailedDescription: "Formulae Body Oliv'Oil is a premium skincare product made with authentic Italian Olive Oil and enriched with traditional Ayurvedic herbs and extracts. This nourishing oil blend combines Haridra, Arjuna, Manjistha, Karpoor, and other natural ingredients to create a versatile skincare solution that moisturizes, protects, and rejuvenates your skin.",
    gallery: [
      { id: 1, url: "/lovable-uploads/b6438a4f-add5-4580-8b16-69777f056bc7.png", alt: "Formulae Body Oliv'Oil bottle" },
      { id: 2, url: "/lovable-uploads/273d3e1b-4591-4b8f-8abb-a1351211a840.png", alt: "Formulae Body Oliv'Oil in use" },
      { id: 3, url: "/lovable-uploads/4a407f4e-8195-41e5-86f8-016599565b52.png", alt: "Formulae Body Oliv'Oil ingredients" }
    ],
    features: [
      "Made with Italian Olive Oil",
      "Enriched with Ayurvedic herbs",
      "Deeply nourishes and moisturizes skin",
      "Helps improve skin elasticity",
      "Protects against environmental damage",
      "Suitable for daily use"
    ],
    specifications: {
      "Key Ingredients": "Italian Olive Oil, Haridra, Arjuna, Manjistha, Karpoor",
      "Available Sizes": "100ml, 250ml",
      "Application": "Body massage, daily moisturization",
      "Skin Type": "Suitable for normal to dry skin"
    },
    category: "Personal Care"
  },
  {
    id: 6,
    title: "Formulae Hand Sanitizer", 
    description: "Advanced Hand Sanitizer that kills 99.8% germs instantaneously without water with Aloe Vera extract.",
    image: "/lovable-uploads/f68fb996-0550-40f0-b87c-90a0b50b75dd.png",
    variant: "dark",
    detailedDescription: "Formulae Hand Sanitizer is an advanced formula designed to kill 99.8% of germs instantly without the need for water. Enriched with Aloe Vera extract, it not only sanitizes effectively but also keeps your hands soft and moisturized. The quick-drying, non-sticky formula makes it perfect for on-the-go use.",
    gallery: [
      { id: 1, url: "/lovable-uploads/f68fb996-0550-40f0-b87c-90a0b50b75dd.png", alt: "Formulae Hand Sanitizer bottle" },
      { id: 2, url: "/lovable-uploads/273d3e1b-4591-4b8f-8abb-a1351211a840.png", alt: "Formulae Hand Sanitizer in use" },
      { id: 3, url: "/lovable-uploads/4a407f4e-8195-41e5-86f8-016599565b52.png", alt: "Formulae Hand Sanitizer features" }
    ],
    features: [
      "Kills 99.8% germs instantly",
      "No water needed",
      "Enriched with Aloe Vera",
      "Quick-drying, non-sticky formula",
      "Gentle on skin",
      "Convenient for travel and daily use"
    ],
    specifications: {
      "Active Ingredients": "Alcohol (70%), Aloe Vera extract",
      "Available Sizes": "50ml, 100ml, 250ml, 500ml",
      "Application": "Hand sanitization",
      "Fragrance": "Mild, fresh scent"
    },
    category: "Personal Care"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getHomeProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getPersonalCareProducts = (): Product[] => {
  return products.filter(product => product.category === "Personal Care");
};
