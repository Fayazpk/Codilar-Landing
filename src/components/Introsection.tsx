import hero from '../assets/ezgif.com-webp-to-jpg-converter.jpg'

const Introsection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight font-sans">
              Reimagine Digital Experience & Commerce
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Codilar is an award-winning agency that excels in building enterprise-grade digital 
              commerce and experience solutions. In collaboration with Adobe, Magento, Pimcore, 
              and Shopify, we tailor impactful customer experiences that resonate and endure.
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
              >
                work
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <img 
              src={hero} 
              alt="Reimagine Digital Experience" 
              className="w-full h-auto object-cover rounded-lg shadow-lg max-h-96"
            />
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {/* Adobe */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold text-red-600">Adobe</div>
              <div className="text-xs text-gray-500">Bronze Solution Partner</div>
            </div>
            
            {/* Shopify Plus */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold text-green-600">shopify<span className="text-black">plus</span></div>
            </div>
            
            {/* Magento */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold text-orange-500">Magento</div>
              <div className="text-xs text-gray-500">Solution Partner</div>
            </div>
            
            {/* AKINON */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold text-gray-600">AKINON</div>
              <div className="text-xs text-gray-500">Solution Partner</div>
            </div>
            
            {/* Pimcore */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold text-gray-800">PIMCORE</div>
              <div className="text-xs text-gray-500">Silver Solution Partner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introsection