import { scrollToSection } from '../utils/smoothScroll';
import { ArrowRight, ShieldCheck, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-agro-forest">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
          alt="Campos agrícolas de alta tecnología" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-agro-forest/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Sprout className="w-4 h-4 text-agro-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Líderes en Insumos Agrícolas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            SOLUCIONES <br />
            <span className="text-agro-neon">INTEGRALES</span> PARA <br />
            TUS CULTIVOS
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Apoyo completo para tu cultivo: productos agrícolas, semillas de alta genética y acompañamiento técnico especializado que impulsan tu productividad y rentabilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('productos')}
              className="bg-agro-neon hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Nuestros Productos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contactanos')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              Asesoría Especializada
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Tech Grid */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] z-0 mask-image:linear-gradient(to_top,black,transparent)"></div>
    </section>
  );
}
