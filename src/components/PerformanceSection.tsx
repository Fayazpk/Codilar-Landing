import car from '../assets/car.svg'

const PerformanceSection = () => {
  const performanceAreas = [
    {
      title: "Sheer Focus",
      description: "eCommerce and Magento are the only things we do at Codilar. And we do it right."
    },
    {
      title: "Enterprise-Grade",
      description: "Building highly scalable and reliable stores with complex modules and integrations is our forte."
    },
    {
      title: "Holistic Approach",
      description: "World-class code, data, performance and consumer psychology are at the heart of our craft."
    },
    {
      title: "Agile",
      description: "We love and follow scrum as our core development process. Our focus is on Quality & reduced risks during sprints."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Small label */}
        <div className="mb-8">
          <span className="text-sm text-gray-600 font-medium">why Codilar</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Car SVG */}
          <div className="relative">
            {/* Background geometric shapes */}
            <div className="absolute inset-0">
              {/* Light blue/teal geometric background */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-teal-100 to-teal-200 transform -skew-y-6 rounded-3xl opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-100 to-cyan-100 transform skew-y-3 rounded-2xl opacity-40"></div>
            </div>
            
            {/* Car SVG */}
            <div className="relative z-10 flex items-center justify-center py-12">
              <img 
                src={car} 
                alt="Performance Commerce Formula 1 Car"
                className="w-full max-w-md h-auto"
              />
            </div>
            
            {/* Decorative plus icons */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 text-blue-400 opacity-60">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/4 w-6 h-6 text-teal-400 opacity-50">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight font-sans">
                Pioneering performance commerce
              </h1>
              
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-blue-600">Performance Commerce</span> is a concept invented by us that drives our delivery strategy. We define it as "a development culture that keeps business success as the key focus".
                </p>
                
                <p>
                  We believe that technology solutions for digital commerce have to be developed very differently compared to other software. There are several factors such as user experience, speed, analytics, SEO, content, security, consumer psychology and conversions that all influence the success and performance of an ecommerce platform.
                </p>
                
                <p>
                  At Codilar, we strive to thoroughly understand the "success" for each of our clients. We train daily to strengthen our skills and ensure the designs and code we craft for our clients contribute to this success.
                </p>
              </div>
            </div>

            {/* Performance Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {performanceAreas.map((area, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {area.description}
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

export default PerformanceSection;
