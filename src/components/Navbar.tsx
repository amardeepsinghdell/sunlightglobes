
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GlobeIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <GlobeIcon size={28} className="text-navy-dark" />
            <span className="font-serif text-xl font-medium text-navy-dark">Sunlight Globes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-gold transition-colors ${
                location.pathname === "/" ? "text-gold" : "text-navy-dark"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`text-sm font-medium hover:text-gold transition-colors ${
                location.pathname === "/gallery" ? "text-gold" : "text-navy-dark"
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium hover:text-gold transition-colors ${
                location.pathname === "/about" ? "text-gold" : "text-navy-dark"
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium hover:text-gold transition-colors ${
                location.pathname === "/contact" ? "text-gold" : "text-navy-dark"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-navy-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <GlobeIcon size={28} className="text-navy-dark" />
              <span className="font-serif text-xl font-medium text-navy-dark">Sunlight Globes</span>
            </Link>
            <button
              className="text-navy-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === "/" ? "text-gold" : "text-navy-dark"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === "/gallery" ? "text-gold" : "text-navy-dark"
              }`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === "/about" ? "text-gold" : "text-navy-dark"
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === "/contact" ? "text-gold" : "text-navy-dark"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
