const MethodologySection = () => {
  const approaches = [
    {
      id: 1,
      image: "/src/assets/10.jpg",
      title: "Empathy",
      description: "Getting to know the audience is utmost important as the whole design system, interactions and the usability can be driven based on it.",
      height: "h-64" // Standard height
    },
    {
      id: 2,
      image: "/src/assets/11.jpg", 
      title: "UX Design",
      description: "Stunning interfaces backed with insights driven UX is our starting step of project",
      height: "h-96" // Taller height
    },
    {
      id: 3,
      image: "/src/assets/12.jpg",
      title: "Pixel, Code and Business",
      description: "Though we advocate users, we also believe in the business decisions and the code implications. We adapt and deliver the best experience",
      height: "h-64" // Standard height
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight font-sans mb-8">
            We focus on users and their experience first
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Each store has a different set of audience which they target and we follow the design thinking approach of empathy based solutions. Our results are always user centered and business driven with performance
          </p>
        </div>

        {/* Approach Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {approaches.map((approach) => (
            <div key={approach.id} className="group">
              {/* Image Card */}
              <div className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 ${approach.height}`}>
                <img 
                  src={approach.image} 
                  alt={approach.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Title overlay on image */}
                {approach.id === 3 && (
                  <div className="absolute bottom-6 right-6">
                    <h3 className="text-xl font-semibold text-white">
                      {approach.title}
                    </h3>
                  </div>
                )}
              </div>
              
              {/* Content below image */}
              <div className="mt-6 space-y-4">
                {approach.id !== 3 && (
                  <h3 className="text-xl lg:text-2xl font-semibold text-white">
                    {approach.title}
                  </h3>
                )}
                
                <p className="text-base text-gray-300 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;
