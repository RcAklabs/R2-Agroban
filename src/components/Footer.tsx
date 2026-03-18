import { Facebook, Linkedin, Twitter, Leaf } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';

export default function Footer() {
  return (
    <footer className="bg-agro-forest text-white pt-16 pb-8 border-t-4 border-agro-neon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <Leaf className="w-8 h-8 text-agro-neon" />
            </div>
            <span className="font-heading font-black text-3xl tracking-tighter text-white uppercase">
              Agroban
            </span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-300 uppercase tracking-wider">
            <a href="#" className="hover:text-agro-neon transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-agro-neon transition-colors">Terms & Conditions</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-neon transition-colors group">
              <Twitter className="w-5 h-5 text-white group-hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-neon transition-colors group">
              <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-neon transition-colors group">
              <Facebook className="w-5 h-5 text-white group-hover:text-white" />
            </a>
          </div>

        </div>

        <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Agroban. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
