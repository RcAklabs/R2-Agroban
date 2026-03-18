import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contactanos" className="py-24 bg-agro-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-agro-emerald font-bold tracking-widest uppercase text-sm mb-3">Soporte Técnico</h4>
          <h2 className="text-4xl md:text-5xl font-black text-agro-forest leading-tight mb-6">
            ¿ESTÁS LISTO PARA LA BIOEVOLUCIÓN?
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestros ingenieros agrónomos están listos para brindarte asesoría personalizada y los productos más eficientes del mercado. Fortalece tu cosecha con Agroban.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Contact Info & Map Representation */}
          <div className="lg:col-span-5 bg-agro-navy p-10 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Abstract Map Graphic */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F3B229" d="M45.7,-76.1C58.9,-69.3,69.2,-55.4,78.2,-41.1C87.2,-26.8,94.9,-12.1,93.6,1.9C92.3,15.9,82.1,29.2,71.7,41.2C61.3,53.2,50.7,63.9,37.8,71.1C24.9,78.3,9.7,82,-5.7,80.7C-21.1,79.4,-36.7,73.1,-50.2,63.8C-63.7,54.5,-75.1,42.2,-81.7,27.5C-88.3,12.8,-90.1,-4.3,-85.7,-19.8C-81.3,-35.3,-70.7,-49.2,-57.6,-56.6C-44.5,-64,-28.9,-64.9,-14.2,-68.8C0.5,-72.7,16.1,-79.6,31.2,-81.1C46.3,-82.6,32.5,-82.9,45.7,-76.1Z" transform="translate(100 100) scale(1.1)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-agro-mustard p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-agro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Dirección Principal</h4>
                    <p className="text-gray-300">Panamericana Norte, OE10-4 y Calle Alonso Moncayo, Parque Delta "Bodega 2"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-agro-mustard p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-agro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Teléfonos</h4>
                    <p className="text-gray-300">2420-067<br/>2421-816<br/>0964 222294</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-agro-mustard p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-agro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">info@agroban.com.ec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-10">
            <h3 className="text-2xl font-black text-agro-forest mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agro-neon focus:border-transparent transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Apellido</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agro-neon focus:border-transparent transition-all" placeholder="Tu apellido" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Celular</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agro-neon focus:border-transparent transition-all" placeholder="099 999 9999" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agro-neon focus:border-transparent transition-all" placeholder="correo@ejemplo.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agro-neon focus:border-transparent transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-agro-neon hover:bg-green-500 text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-md">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
