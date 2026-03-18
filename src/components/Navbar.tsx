import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Productos', id: 'productos' },
    { name: 'Sostenibilidad', id: 'sostenibilidad' },
    { name: 'Contáctanos', id: 'contactanos' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Agroban */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-agro-emerald p-2 rounded-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-black text-2xl tracking-tighter text-agro-forest uppercase">
            Agroban
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-semibold text-gray-700 hover:text-agro-neon transition-colors uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contactanos')}
            className="bg-agro-neon hover:bg-green-500 text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
          >
            Asesoría Técnica
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-lg font-semibold text-gray-800 py-2 border-b border-gray-50 uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contactanos')}
              className="mt-4 bg-agro-neon text-white px-6 py-3 rounded-lg font-bold text-center"
            >
              Asesoría Técnica
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
