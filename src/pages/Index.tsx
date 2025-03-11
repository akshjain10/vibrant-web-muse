
import Navigation from '@/components/Navigation';
import { ArrowRight, CheckCircle2, MoveRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-sora font-bold leading-tight mb-6">
              Transform Your Business With Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Elevate your brand with cutting-edge solutions designed for modern business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sora font-bold mb-4">Premium Features</h2>
            <p className="text-gray-600">Discover what makes us different</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Innovation', 'Scalability', 'Security'].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-secondary hover:shadow-xl transition-all duration-300 group">
                <CheckCircle2 className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-2xl font-sora font-bold mb-4">{feature}</h3>
                <p className="text-gray-600 mb-6">Experience the power of modern solutions with our premium {feature.toLowerCase()} features.</p>
                <a href="#" className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Learn More <MoveRight className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-sora font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                We're dedicated to delivering exceptional solutions that drive business growth and innovation. Our team of experts works tirelessly to ensure your success.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-primary/90 transition-all group">
                Our Story
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-gray-200 h-[400px] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-sora font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-12">Ready to transform your business? Contact us today.</p>
            <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl">
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" className="w-full bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all">
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
