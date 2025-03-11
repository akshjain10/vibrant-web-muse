
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/273d3e1b-4591-4b8f-8abb-a1351211a840.png" 
        alt="Esencia Overseas Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
