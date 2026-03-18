import { Globe2, LeafyGreen, Recycle } from 'lucide-react';

export default function Sustainability() {
  return (
    <section id="sostenibilidad" className="py-24 bg-agro-forest text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h4 className="text-agro-neon font-bold tracking-widest uppercase text-sm mb-4">Visión de Futuro</h4>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              CULTIVAR CON <br/> SENTIDO
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              En Agroban, la sostenibilidad es el punto de partida. Creemos en una agricultura que respeta la tierra, mejora el rendimiento y fortalece el futuro del productor. Trabajamos para que cada solución beneficie no solo al cultivo, sino también a quienes lo cuidan.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: LeafyGreen, title: 'Tecnología al servicio del campo', desc: 'Innovación agronómica para crear soluciones efectivas con menor impacto.' },
                { icon: Recycle, title: 'Nutrición eficiente', desc: 'Estrategias que maximizan la absorción manteniendo la fertilidad del suelo.' },
                { icon: Globe2, title: 'Manejo técnico sostenible', desc: 'Programas adaptados equilibrando rentabilidad y cuidado ambiental.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <item.icon className="w-6 h-6 text-agro-neon" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetrical Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <div className="col-span-1 flex flex-col gap-4">
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop" 
                alt="Investigación agrícola" 
                className="w-full h-2/3 object-cover rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="w-full h-1/3 bg-agro-emerald rounded-3xl p-6 flex flex-col justify-end">
                <span className="text-4xl font-black mb-1">100%</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Compromiso Verde</span>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4 pt-12">
              <div className="w-full h-1/3 bg-agro-neon rounded-3xl p-6 flex flex-col justify-end text-agro-forest">
                <span className="text-4xl font-black mb-1">Eco</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Soluciones Biológicas</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop" 
                alt="Cultivo sostenible" 
                className="w-full h-2/3 object-cover rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
