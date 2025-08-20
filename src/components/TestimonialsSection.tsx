import { useState, useEffect } from 'react';

import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: img14,
      quote: "What I value most about Codilar is their genuine and sincere approach. They mean what they say, and their actions speak even louder. When you're working with people remotely, that kind of trust is invaluable. Codilar took the time to understand what we needed and delivered on every front. Choosing Magento and working with them has been the best decision for GST.",
      name: "Allan Dresner",
      title: "Proprietor, Global Style Trading (GST)"
    },
    {
      id: 2,
      image: img15,
      quote: "Being India's top jewellery ecommerce brand, we were struggling in scaling our ecommerce technology stack. With Codilar, we have been able to boost our Magento store performance and add many complex modules in the most optimized way. Codilar's services has been outstanding and I recommend them to all the other players in the market.",
      name: "Rupesh Jain",
      title: "CEO, Candere"
    },
    {
      id: 3,
      image: img16,
      quote: "We could clearly see Codilar's passion for digital commerce and technology. Our years of frustration seemed very easily solvable after discussions with them. We decided to go ahead and never had to look back since then",
      name: "Vijay Thiruvasagam",
      title: "Head of Technology, ALDO Singapore"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextSlide = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight font-sans mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            See what our customers are saying
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <div className="flex items-center justify-center min-h-[400px]">
            {/* Left Quote Mark */}
            <div className="absolute left-0 top-0 text-6xl lg:text-8xl text-gray-300 font-serif leading-none">
              "
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center px-12 lg:px-20">
              <div className="space-y-8">
                {/* Testimonial Text */}
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* Customer Photo */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Quote Mark */}
            <div className="absolute right-0 bottom-0 text-6xl lg:text-8xl text-gray-300 font-serif leading-none">
              "
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
