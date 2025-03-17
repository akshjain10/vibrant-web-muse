
import React, { useState } from 'react';
import { Mail, User, Send, Phone, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

// Service tokens interface
interface ServiceTokens {
  clientId: string | null;
  clientSecret: string | null;
}

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // In production, these would be provided by your backend through a secure API
  // For now, we'll leave them null and rely on the Cloudflare bypass rule
  const serviceTokens: ServiceTokens = {
    clientId: null,  // In production: process.env.CF_ACCESS_CLIENT_ID
    clientSecret: null  // In production: process.env.CF_ACCESS_CLIENT_SECRET
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Determine correct API endpoint based on the current domain
      let apiEndpoint;
      const currentDomain = window.location.hostname;
      
      if (currentDomain === 'localhost' || currentDomain.includes('lovable')) {
        // Development or preview environment
        apiEndpoint = `${window.location.origin}/api/email`;
      } else if (currentDomain.includes('esenciaindia.com')) {
        // Production environment - use absolute URL
        apiEndpoint = `https://${currentDomain}/api/email`;
      } else {
        // Fallback for other environments
        apiEndpoint = `/api/email`;
      }
      
      console.log("Sending request to:", apiEndpoint);
      
      // Prepare headers with authentication tokens if available
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
      
      // Add CF Access service tokens if available
      if (serviceTokens.clientId && serviceTokens.clientSecret) {
        headers['CF-Access-Client-Id'] = serviceTokens.clientId;
        headers['CF-Access-Client-Secret'] = serviceTokens.clientSecret;
      }
      
      console.log("Request headers:", headers);
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
      });
      
      console.log("Response status:", response.status);
      
      // Check if we received a Cloudflare Access authentication error
      if (response.status === 401 || response.status === 403) {
        console.warn("Authentication required by Cloudflare Access");
        
        // Get the authentication URL from the response headers
        const authUrl = response.headers.get('CF-Authentication-Redirect');
        if (authUrl) {
          // Redirect to the Cloudflare Access login page
          window.location.href = authUrl;
          return;
        }
        
        // If no redirect URL is provided, show a generic error
        throw new Error("Authentication required to send messages. Please log in.");
      }
      
      const data = await response.json();
      console.log("Response from API:", data);
      
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Scroll to top after form submission
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Message Failed",
        description: typeof error === 'object' && error !== null && 'message' in error 
          ? String(error.message) 
          : "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h3 className="text-2xl font-sora font-bold mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Full Name"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Phone Number"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <div className="relative">
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Subject"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              Sending... <Loader2 className="h-5 w-5 animate-spin" />
            </>
          ) : (
            <>
              Send Message <Send className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email Address</h4>
            <p className="text-gray-600">info@esenciaindia.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Phone Number</h4>
            <p className="text-gray-600">+91 22 4880 8712, Extn: 1212</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 md:col-span-2">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Office Address</h4>
            <p className="text-gray-600">
              Corporate Office: Oberoi Commerz II, CTS No. 95, Off. W.E. Highway, Oberoi Garden City,<br />
              Goregaon East (D2), Mumbai - 400063, Maharashtra, INDIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
