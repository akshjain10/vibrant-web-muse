
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const QualitySection = () => {
  return (
    <section id="quality" className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-sora font-bold mb-6">Quality Certifications</h2>
          <p className="text-gray-700 mb-8">
            At Esencia Overseas, we maintain the highest standards of quality in all our products and manufacturing processes.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">WHO-GMP Certified</h3>
                <p className="text-gray-600">Our manufacturing facilities adhere to the stringent standards set by the World Health Organization's Good Manufacturing Practices.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">ISO 9001:2015 Certified</h3>
                <p className="text-gray-600">We maintain a robust quality management system that meets international standards for consistency and customer satisfaction.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">FDA Approved</h3>
                <p className="text-gray-600">Our products comply with the regulations set by the Food and Drug Administration, ensuring safety and efficacy.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">NABL Accredited Testing</h3>
                <p className="text-gray-600">We partner with National Accreditation Board for Testing and Calibration Laboratories (NABL) accredited labs for quality testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/10 -z-10 hidden lg:block"></div>
    </section>
  );
};

export default QualitySection;
