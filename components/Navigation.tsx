import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-teal-600 text-white p-1.5 rounded-lg group-hover:bg-teal-700 transition-colors">
              <Dna size={24} />
            </div>
            <span className="font-bold text-lg text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors">
              Dr. Atul Tiwari
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-teal-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-teal-600 font-medium p-2 rounded-lg hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="text-center w-full px-4 py-3 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};