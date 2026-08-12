import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500/30">
      <Navigation />
      <main>
        <Hero />
        <Platform />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
