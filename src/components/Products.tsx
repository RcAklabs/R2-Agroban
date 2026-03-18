import { ArrowRight, Beaker, Bug, Sprout, Wheat } from 'lucide-react';

export default function Products() {
  const categories = [
    { id: 'semillas', name: 'Semillas', icon: Wheat, count: 45 },
    { id: 'fertilizantes', name: 'Fertilizantes', icon: Sprout, count: 32 },
    { id: 'plagas', name: 'Control de Plagas', icon: Bug, count: 58 },
    { id: 'bioestimulantes', name: 'Bioestimulantes', icon: Beaker, count: 24 },
  ];

  const featuredProducts = [
    {
      brand: 'Agroseed',
      name: 'Monarca',
      category: 'Semillas',
      description: 'Semilla de maíz semi erecto y resistente al acame, con mazorcas cónicas de grano cristalino anaranjado.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
    },
    {
      brand: 'Alteo',
      name: 'NemLink',
      category: 'Fertilizante',
      description: 'Fertilizante líquido que nutre el suelo y estimula la microflora, controla nemátodos y hongos mediante acción enzimática.',
      image: 'https://images.unsplash.com/photo-1628183213361-022fb504953c?q=80&w=800&auto=format&fit=crop',
    },
    {
      brand: 'Bayer',
      name: 'Agrotin®',
      category: 'Coadyuvante',
      description: 'Coadyuvante no iónico que regula pH, reduce espuma y mejora la eficacia de agroquímicos sin afectar cultivos.',
      image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-agro-emerald font-bold tracking-widest uppercase text-sm mb-3">Catálogo Técnico</h4>
            <h2 className="text-4xl md:text-5xl font-black text-agro-forest leading-tight">
              INSUMOS AGRÍCOLAS DE ALTA CALIDAD
            </h2>
          </div>
          <button className="text-agro-forest font-bold hover:text-agro-neon transition-colors flex items-center gap-2 uppercase tracking-wider text-sm">
            Ver catálogo completo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat) => (
            <div key={cat.id} className="border border-gray-200 rounded-2xl p-6 hover:border-agro-neon hover:shadow-md transition-all cursor-pointer group">
              <cat.icon className="w-8 h-8 text-agro-emerald mb-4 group-hover:text-agro-neon transition-colors" />
              <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} productos</p>
            </div>
          ))}
        </div>

        {/* Featured Products Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="group flex flex-col bg-agro-light rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Product Image Area */}
              <div className="h-64 bg-white p-8 relative flex items-center justify-center">
                <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.brand}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-agro-emerald text-sm font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </span>
                <h3 className="text-2xl font-black text-agro-forest mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                
                <button className="w-full bg-white border-2 border-agro-neon text-agro-forest hover:bg-agro-neon hover:text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Ver Ficha Técnica
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
