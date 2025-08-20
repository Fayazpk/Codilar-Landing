const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      id: 1,
      title: "1. Platforms",
      description: "Expertise in Leading Platforms for Seamless Digital Transformation. Our certified experts specialize in building, optimizing, and scaling your business using top platforms like Adobe Commerce, Shopify Plus, Pimcore, and more.",
      tags: [
        { name: "Adobe Commerce (Magento)", icon: "🏢" },
        { name: "Shopify Plus", icon: "🛍️" },
        { name: "Pimcore", icon: "📊" },
        { name: "Akinon", icon: "🔧" },
        { name: "Adobe Experience Cloud", icon: "☁️" }
      ]
    },
    {
      id: 2,
      title: "2. Digital Commerce",
      description: "Transform your business with innovative digital commerce solutions tailored for every industry and business model. From B2C to mobile commerce, Codilar delivers scalable, customer-focused platforms.",
      tags: [
        { name: "Headless Architecture", icon: "🏗️" },
        { name: "Composable Commerce", icon: "🛒" },
        { name: "B2C & Omnichannel", icon: "🏢" },
        { name: "D2C", icon: "🔗" },
        { name: "B2B Commerce", icon: "🤝" },
        { name: "Mobile Commerce", icon: "📱" },
        { name: "Order Management System (OMS)", icon: "📋" }
      ]
    },
    {
      id: 3,
      title: "3. Service",
      description: "End-to-End Services to Achieve Your Business Goals. From strategic planning to operational execution, Codilar offers a full suite of services to optimize and grow your digital commerce capabilities.",
      tags: [
        { name: "Strategy Consulting", icon: "💡" },
        { name: "Experience Design", icon: "🎨" },
        { name: "Platform Engineering", icon: "⚙️" },
        { name: "Digital Marketing", icon: "📈" },
        { name: "DevOps", icon: "🔧" },
        { name: "Conversion Rate Optimization", icon: "📊" },
        { name: "Managed Support", icon: "🛠️" }
      ],
      hasExploreButton: true
    },
    {
      id: 4,
      title: "4. Content & Data",
      description: "Empower your business with streamlined content management and actionable insights. Codilar helps you unify your data, optimize experiences, and enhance decision-making.",
      tags: [
        { name: "Digital Experience (DXP)", icon: "💻" },
        { name: "Analytics", icon: "📈" },
        { name: "Product Information Management (PIM)", icon: "📦" },
        { name: "Customer Data Platform (CDP)", icon: "👥" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-screen">
          {/* Left Content - Scrollable */}
          <div>
            {expertiseAreas.map((area) => (
              <div key={area.id} className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-8">
                  <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 leading-tight font-sans">
                    {area.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                    {area.description}
                  </p>
                  
                  {/* Tags/Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {area.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="mr-2">{tag.icon}</span>
                        {tag.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Explore All button for Service section */}
                  {area.hasExploreButton && (
                    <div className="pt-4">
                      <button className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                        Explore All
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Sticky Image */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center py-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
              <div className="aspect-square relative">
                <img 
                  src="/src/assets/13.png" 
                  alt="Codilar Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
