import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Visi & Misi', href: '#visi-misi' },
    { label: 'Profil', href: '#profil' },
    { label: 'Program', href: '#programs' },
    { label: 'Berita', href: '#news' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Kontak', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
              isScrolled 
                ? 'bg-gray-900 text-white' 
                : 'bg-white/20 backdrop-blur text-white border border-white/30'
            }`}>
              PKS
            </div>
            <span className={`font-semibold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              DPC Dramaga
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center rounded-full border shadow-sm px-2 py-1 transition-all ${
              isScrolled 
                ? 'bg-white border-gray-200' 
                : 'bg-white/20 backdrop-blur-md border-white/30'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white hover:text-white hover:bg-white/20'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'bg-white border-gray-200 text-gray-900'
                : 'bg-white/20 backdrop-blur-md border-white/30 text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className={`bg-white/95 backdrop-blur-lg rounded-2xl border shadow-lg ${
            isScrolled ? 'border-gray-200' : 'border-white/40'
          }`}>
            <div className="p-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="mt-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 border-0"
              >
                Booking Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;