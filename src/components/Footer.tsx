const Footer = () => {
  const services = [
    "Adobe Commerce (Magento)",
    "Shopify Plus Expert",
    "Adobe Experience Manager (AEM)",
    "Adobe Analytics",
    "Adobe Real Time CDP",
    "Adobe Target",
    "Adobe Audience Manager",
    "Magento Audit"
  ];

  const company = [
    "About",
    "PWA Platform",
    "Work",
    "Contact us",
    "Blog",
    "Partners",
    "Pimcore",
    "Career"
  ];

  const social = [
    "Linkedin",
    "Twitter",
    "Youtube",
    "Facebook",
    "Instagram"
  ];

  return (
    <footer className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo with decorative lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gray-300 max-w-xs"></div>
          <div className="mx-8">
            <img 
              src="/src/assets/logo.png" 
              alt="Codilar"
              className="h-12"
            />
          </div>
          <div className="flex-1 h-px bg-gray-300 max-w-xs"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Social</h3>
            <ul className="space-y-3">
              {social.map((platform, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ISO Certifications */}
        <div className="flex justify-center items-center space-x-12 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">ISO</div>
              </div>
            </div>
            <div className="text-sm">
              <div className="text-gray-600">International Security Organisation</div>
              <div className="font-bold text-gray-900">27001 Certified</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">ISO</div>
              </div>
            </div>
            <div className="text-sm">
              <div className="text-gray-600">International Security Organisation</div>
              <div className="font-bold text-gray-900">9001 Certified</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            &copy; Copyright Codilar 2025. All Rights Reserved. 
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-700 ml-1"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer