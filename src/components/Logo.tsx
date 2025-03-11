
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-sora font-bold">
        <span className="text-primary">esencia</span>
        <span className="text-black">OVERSEAS</span>
      </span>
    </div>
  );
};

export default Logo;
