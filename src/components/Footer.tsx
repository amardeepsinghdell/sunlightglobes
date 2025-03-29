
import { Link } from "react-router-dom";
import { GlobeIcon, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GlobeIcon size={24} className="text-gold" />
              <span className="font-serif text-xl font-medium text-white">Sunlight Globes</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Crafting premium globes that inspire wonder and exploration since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Antique Globes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Modern Globes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Illuminated Globes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Custom Designs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Cartography Lane, Atlas City, AC 12345
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>+1-416-876-6847 (Canada)</div>
                  <div>+91-9810079707 (India)</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">sunlightglobe@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Sunlight Overseas Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-gold transition-colors">
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
