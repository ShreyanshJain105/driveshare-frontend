import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-xl font-semibold mb-3 sm:mb-4">DriveShare</h3>
            <p className="text-sm text-gray-400 mb-4 px-4 sm:px-0">
              Your trusted platform for secure and seamless file sharing. Share files instantly with colleagues, clients, and teams worldwide.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Features</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Security</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-white text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">API Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-white text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start">
                <Mail size={16} className="mt-1 mr-2 flex-shrink-0" />
                <a href="mailto:support@driveshare.com" className="text-sm hover:text-white transition-colors">
                  support@driveshare.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone size={16} className="mt-1 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin size={16} className="mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  123 Drive Street, Suite 100<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              &copy; 2025 DriveShare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;