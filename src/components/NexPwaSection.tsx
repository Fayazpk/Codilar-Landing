const NexPwaSection = () => {
  const features = [
    {
      icon: "🏢",
      text: "Built for Magento"
    },
    {
      icon: "💰",
      text: "Low Investment, Faster Go-To-Market One-Time Purchase"
    },
    {
      icon: "👥",
      text: "Implementation, Training & Support"
    },
    {
      icon: "✅",
      text: "No Additional Infrastructure"
    },
    {
      icon: "⚡",
      text: "Google Pagespeed Score 90+ and built in SEO"
    },
    {
      icon: "💳",
      text: "Payment Integration"
    },
    {
      icon: "🌐",
      text: "RTL Support"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img 
                src="/src/assets/16.jpg" 
                alt="NexPwa Mobile App Interface"
                className="w-full max-w-sm h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight font-sans">
                Introducing NexPwa A superfast PWA for Magento to boost conversions
              </h1>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-6">
              <button className="inline-flex items-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexPwaSection;
