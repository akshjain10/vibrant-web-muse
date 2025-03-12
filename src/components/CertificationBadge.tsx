
import React from 'react';

interface CertificationBadgeProps {
  title: string;
  image: string;
}

const CertificationBadge = ({ title, image }: CertificationBadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-3">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default CertificationBadge;
