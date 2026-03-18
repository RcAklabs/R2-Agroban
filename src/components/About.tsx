import { Target, TrendingUp, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "29+", label: "Años de Experiencia", icon: Award },
    { value: "835+", label: "Clientes Satisfechos", icon: Users },
    { value: "140+", label: "Insumos Agrícolas", icon: Target },
    { value: "266+", label: "Soluciones Eficientes", icon: TrendingUp },
  ];

  return (
    <section id="nosotros" className="py-24 bg-agro-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 md:w-2/3">
          <h4 className="text-agro-emerald font-bold tracking-widest uppercase text-sm mb-3">Quiénes Somos</h4>
          <h2 className="text-4xl md:text-5xl font-black text-agro-forest leading-tight mb-6">
            CULTIVAMOS EL FUTURO DE LA AGRICULTURA ECUATORIANA
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En Agroban creemos que el campo es el motor del Ecuador. Nuestra razón de ser es aportar al desarrollo del país a través de soluciones agrícolas integrales, innovadoras y adaptadas a cada región. Desde la semilla hasta la cosecha, acompañamos al agricultor con tecnología y compromiso.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Image Card */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden relative min-h-[400px] group">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a40d5?q=80&w=2070&auto=format&fit=crop" 
              alt="Ingenieros agrónomos en el campo" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-agro-forest/90 via-agro-forest/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Nuestra Misión</h3>
              <p className="text-gray-200 max-w-xl">
                Impulsar el progreso del agro ofreciendo soluciones de alta calidad, respaldadas por tecnología de punta y asesoría técnica personalizada.
              </p>
            </div>
          </div>

          {/* Stats Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center items-center text-center">
                <stat.icon className="w-10 h-10 text-agro-emerald mb-4" />
                <span className="text-5xl font-black text-agro-forest mb-2">{stat.value}</span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Vision Card */}
          <div className="md:col-span-4 bg-agro-forest p-8 rounded-3xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-agro-neon">Nuestra Visión</h3>
            <p className="text-gray-300 leading-relaxed">
              Proyectarnos como la empresa líder en soluciones agrícolas integrales, asegurando la rentabilidad y protegiendo nuestro patrimonio natural en cada rincón del país.
            </p>
          </div>

          {/* More Stats */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.slice(2, 4).map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                <stat.icon className="w-10 h-10 text-agro-emerald mb-4" />
                <span className="text-5xl font-black text-agro-forest mb-2">{stat.value}</span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
