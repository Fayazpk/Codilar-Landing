import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

const AboutSection = () => {
  const awards = [
    {
      id: 1,
      image: img1,
      title: "Codilar Wins Prestigious BIGBOX 2025 Award",
      year: "2025"
    },
    {
      id: 2,
      image: img2, 
      title: "Codilar Wins Big at Meet Magento India 2025",
      year: "2025"
    },
    {
      id: 3,
      image: img3,
      title: "Codilar Wins the World Traveler Award at Meet Magento New York",
      year: "2024"
    },
    {
      id: 4,
      image: img4,
      title: "B2B Champ Title Winner At Meet Magento India",
      year: "2024"
    },
    {
      id: 5,
      image: img5,
      title: "Our client Lals Group (Mom Store) makes it to top 3 finalist at Pimcore Awards Data Hero of the Year",
      year: "2022"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-24 lg:h-fit py-16 lg:py-24">
            <div className="space-y-8">
              <div className="text-white text-sm font-medium tracking-wider uppercase">
                about
              </div>
              
              <h2 className="text-4xl lg:text-4xl xl:text-5xl font-sans text-white leading-tight">
                Challenging status-quo and debunking mediocrity in ecommerce technology since inception
              </h2>
              
              <p className="text-base text-gray-300 leading-relaxed max-w-lg">
                We saw technology challenges hampering the growth of ecommerce initiatives of many successful organizations. Most of these organizations were engaging technology partners who either sold pre-packaged solutions without considering the business goals or those who built e-commerce solutions just like any other piece of software.
              </p>
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="py-16 lg:py-24">
            <div className="space-y-12">
              {awards.map((award, index) => {
                const isEven = index % 2 === 1; // Second item (index 1) is even position
                
                return (
                  <div key={award.id} className="relative group">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${isEven ? 'md:grid-flow-col-dense' : ''}`}>
                      {/* Text Content */}
                      <div className={`space-y-4 ${isEven ? 'md:col-start-2' : ''}`}>
                        <div className="text-white/60 text-sm font-medium">
                          {award.year}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
                          {award.title}
                        </h3>
                        <div className="pt-2">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-colors duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image */}
                      <div className={`${isEven ? 'md:col-start-1' : ''}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                          <div className="aspect-video relative">
                            <img 
                              src={award.image} 
                              alt={award.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Subtle overlay for better contrast */}
                            <div className="absolute inset-0 bg-black/10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
