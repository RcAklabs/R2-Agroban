import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/593964222294" // Número de ejemplo basado en la imagen
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-agro-neon hover:bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Escríbenos!
      </span>
    </a>
  );
}
