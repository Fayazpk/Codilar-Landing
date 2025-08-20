import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: img6,
      title: "Aldo",
      description: "Omnichannel ecommerce implementation for world's favourite footwear & accessories brand in 4 countries",
      link: "Explore project →"
    },
    {
      id: 2,
      image: img7, 
      title: "Homes r Us",
      description: "Multi-country ecommerce implementation for Middle East's fastest growing home furniture brand on Adobe Commerce and Pimcore",
      link: "Explore project →"
    },
    {
      id: 3,
      image: img8,
      title: "Candere",
      description: "Enterprise grade ecommerce solution for the largest brand on Adobe Commerce.",
      link: "Explore project →"
    },
    {
      id: 4,
      image: img9,
      title: "Reebok",
      description: "Reebok, a global athletic footwear and apparel company, wanted to create a new ecommerce website to sell their products online. They approached us to build the website on Magento Cloud and customize it to meet their specific needs.",
      link: "Explore project →"
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight font-sans mb-8">
            A quick glimpse at some of the best outcomes which elevated the brands
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              We are the go to agency for organizations to get started or grow in their digital commerce presence. We guide you through the journey at all stages.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We inculcated the best practices backed up with years of experience in the domain to deliver unparalleled solutions. Here is a quick glimpse of some of the work done for our awesome clients.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Row 1: ALDO - Image left, details right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={projects[0].image} 
                      alt={projects[0].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 leading-tight font-sans">
                    {projects[0].title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {projects[0].description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {projects[0].link}
                    </a>
                  </div>
                </div>
              </div>

              {/* Row 2: Homes r Us - Details left, image right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4 md:order-1">
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 leading-tight font-sans">
                    {projects[1].title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {projects[1].description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {projects[1].link}
                    </a>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:order-2">
                  <div className="aspect-video relative">
                    <img 
                      src={projects[1].image} 
                      alt={projects[1].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Candere - Image left, details right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={projects[2].image} 
                      alt={projects[2].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 leading-tight font-sans">
                    {projects[2].title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {projects[2].description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {projects[2].link}
                    </a>
                  </div>
                </div>
              </div>

              {/* Row 4: Reebok - Details left, image right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4 md:order-1">
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 leading-tight font-sans">
                    {projects[3].title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {projects[3].description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {projects[3].link}
                    </a>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:order-2">
                  <div className="aspect-video relative">
                    <img 
                      src={projects[3].image} 
                      alt={projects[3].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* View all work button */}
              <div className="pt-8">
                <div className="flex justify-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    View all work
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
