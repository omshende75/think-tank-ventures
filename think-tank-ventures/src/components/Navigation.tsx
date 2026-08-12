import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Industries', href: '#platform' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-slate-900 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex-shrink-0" onClick={() => setActive('Home')}>
            <Logo isDark={true} />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative text-sm font-semibold transition-colors py-1 ${
                  active === link.name ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {active === link.name && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-indigo-500 rounded-full" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 bg-white/5 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors ml-2"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-xl border-t border-slate-800 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-base font-semibold p-3 rounded-lg ${
                active === link.name ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
              }`}
              onClick={() => {
                setActive(link.name);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-2 text-center px-5 py-3 bg-white/5 border border-white/20 text-white text-base font-semibold rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
