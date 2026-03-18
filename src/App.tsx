import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-agro-neon selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Sustainability />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
