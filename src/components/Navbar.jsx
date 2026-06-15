import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setShowLangDropdown(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/collection', label: t('nav.collection') },
    { path: '/certifications', label: t('nav.certs') },
    { path: '/export-shipping', label: t('nav.export') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxury-nav/95 backdrop-blur-md border-b border-luxury-border py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 border border-gold-500 rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[135deg]">
                <span className="text-gold-500 font-serif text-sm -rotate-45 font-semibold group-hover:rotate-[-135deg] transition-transform duration-500">RS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-text font-serif tracking-widest text-base font-semibold group-hover:text-gold-500 transition-colors duration-300">R SUTARIYA</span>
                <span className="text-gold-500 tracking-[0.25em] text-[8px] uppercase -mt-1 font-serif">EXPORTS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `relative py-2 text-xs uppercase tracking-widest font-serif transition-colors duration-300 ${
                      isActive ? 'text-gold-500 font-semibold' : 'text-luxury-text hover:text-gold-500'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center gap-1.5 py-2 px-3 text-xs uppercase tracking-widest text-luxury-text hover:text-gold-500 transition-colors duration-300 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-500" />
                  <span>{currentLangObj.flag} {language.toUpperCase()}</span>
                  <ChevronDown className={`w-3 h-3 text-luxury-text transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-36 bg-luxury-card border border-luxury-border shadow-xl rounded-sm py-1 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs tracking-wider font-serif flex items-center gap-2 hover:bg-gold-500/10 hover:text-gold-500 transition-colors duration-200 cursor-pointer ${
                            language === lang.code ? 'text-gold-500 bg-gold-500/5' : 'text-luxury-text-sec'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Switcher Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-luxury-text hover:text-gold-500 transition-colors duration-300 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Inquiry Button */}
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-6 py-2 bg-transparent border border-gold-500 text-gold-500 hover:text-black font-serif text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-gold-500 shadow-[0_0_10px_rgba(197,168,128,0.05)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] rounded-sm cursor-pointer"
              >
                {t('inquiry')}
              </Link>
            </div>

            {/* Mobile Menu Button & Toggles */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Theme Switcher Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 text-luxury-text hover:text-gold-500 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Language Switcher Button for Mobile */}
              <button
                onClick={() => {
                  const currentIndex = languages.findIndex(l => l.code === language);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex].code);
                }}
                className="flex items-center gap-1 py-1.5 px-2 text-xs text-luxury-text border border-luxury-border rounded-sm cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gold-500" />
                <span>{currentLangObj.flag}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-text hover:text-gold-500 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6 text-gold-500" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full bg-luxury-bg/95 border-b border-luxury-border backdrop-blur-lg z-30 lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `block py-2.5 px-4 text-sm uppercase tracking-widest font-serif transition-colors ${
                    isActive ? 'text-gold-500 bg-gold-500/5 border-l-2 border-gold-500 pl-3.5 font-semibold' : 'text-luxury-text hover:text-gold-500'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-luxury-border px-4">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center py-3 bg-gold-500 text-black font-serif text-xs uppercase tracking-widest rounded-sm font-semibold hover:bg-gold-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('inquiry')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
