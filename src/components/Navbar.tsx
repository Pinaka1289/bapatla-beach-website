'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#stay', label: 'Places to Stay' },
  { href: '#eat', label: 'Eat & Drink' },
  { href: '#travel', label: 'Travel Info' },
  { href: '#attractions', label: 'Attractions' },
  { href: '#realestate', label: 'Real Estate' },
  { href: '#promotions', label: 'Promotions' },
  { href: '#reach', label: 'How to Reach' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a1628]/85 backdrop-blur-xl shadow-lg shadow-ocean-950/5 border-b border-ocean-100/60 dark:border-ocean-800/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group">
            <img
              src="/images/logo.svg"
              alt="Bapatla Beach Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-ocean-400 group-hover:border-sunset-500 transition-colors"
            />
            <span className={`font-bold text-lg sm:text-xl transition-colors duration-500 ${
              scrolled
                ? 'text-ocean-700 dark:text-ocean-300'
                : 'text-white'
            }`}>
              Bapatla<span className="text-sunset-500">Beach</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-ocean-700 dark:text-ocean-200 hover:bg-ocean-50 dark:hover:bg-ocean-900/50 hover:text-ocean-600'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`ml-2 p-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? 'bg-ocean-50 dark:bg-ocean-900/50 text-ocean-600 dark:text-ocean-300 hover:bg-ocean-100'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all ${
                  scrolled
                    ? 'bg-ocean-50 dark:bg-ocean-900/50 text-ocean-600 dark:text-ocean-300'
                    : 'bg-white/10 text-white'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? 'text-ocean-700 dark:text-ocean-200'
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-xl rounded-xl p-2 shadow-lg border border-ocean-100 dark:border-ocean-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 rounded-lg text-ocean-700 dark:text-ocean-200 hover:bg-ocean-50 dark:hover:bg-ocean-900/50 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
