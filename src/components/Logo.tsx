
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
    <img
            src="/lovable-uploads/logoEO.png"
            alt="Esencia Overseas Logo"
            className="h-12 w-auto"
          />
      <span className="text-2xl font-sora font-bold">
        <span className="text-primary"> ESENCIA</span>
        <span className="text-black">       OVERSEAS</span>
      </span>
    </div>
  );
};

export default Logo;
