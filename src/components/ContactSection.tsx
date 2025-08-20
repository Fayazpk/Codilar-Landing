const ContactSection = () => {
  const offices = [
    {
      country: "UAE",
      icon: "🔗",
      address: "DTECH, Techno Hub 1, Dubai Silicon Oasis Authority, United Arab Emirates - Dubai - United Arab Emirates"
    },
    {
      country: "Singapore",
      address: "Codilar Digital Pte Ltd, 68 Circular Road, #02-01, 049422, Singapore"
    },
    {
      country: "Oman",
      address: "Building No. 2/798, Way No. 43, Block No. 336, Al Khud 132, Muscat, Oman"
    },
    {
      country: "Saudi Arabia",
      address: "Building No 6827, Prince Turki Ibn Abdulaziz Al Awol Street, Al Muhammadiyah District, Riyadh, Kingdom of Saudi Arabia- 12302"
    },
    {
      country: "India",
      city: "Bengaluru",
      address: "7th Floor, Jupiter Block, Prestige Tech Park, Kadubeesenahalli, Bellandur Amanikere, Bengaluru, Karnataka 560103"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Form */}
          <div className="relative">
            {/* Yellow decorative shape */}
            <div className="absolute -left-8 top-0 w-32 h-32 bg-yellow-400 rounded-full opacity-80 -z-10"></div>
            
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight font-sans">
                Let's talk
              </h2>
              
              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                  />
                  <select className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200">
                    <option value="">General</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Submit
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Our Offices */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight font-sans">
              Our Offices
            </h2>
            
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {office.country}
                    </h3>
                    {office.icon && (
                      <span className="text-lg">{office.icon}</span>
                    )}
                  </div>
                  
                  {office.city && (
                    <h4 className="text-lg font-medium text-gray-700">
                      {office.city}
                    </h4>
                  )}
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
