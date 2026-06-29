import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpeg';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => {
    // Initialize from actual scroll position — prevents wrong-state on first render
    if (typeof window !== 'undefined') return window.scrollY > 50;
    return false;
  });
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showMobileLangDropdown, setShowMobileLangDropdown] = useState(false);
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
    setShowMobileLangDropdown(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/collection', label: t('nav.collection') },
    { path: '/certifications', label: t('nav.certs') },
    { path: '/export-shipping', label: t('nav.export') },
    { path: '/diamond-journey', label: t('nav.journey') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', label: 'English', flagCode: 'gb' },
    { code: 'it', label: 'Italiano', flagCode: 'it' },
    { code: 'fr', label: 'Français', flagCode: 'fr' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];
  const isHome = location.pathname === '/';
  const showTransparent = isHome && !isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        showTransparent 
          ? 'bg-transparent py-5' 
          : 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-gold-500/15 py-3.5 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={() => handleNavLinkClick('/')}
              className="flex items-center gap-2.5 group flex-shrink-0"
            >
              <img src={logoImg} alt="R SUTARIYA EXPORTS Logo" className="h-9 w-9 object-contain rounded-sm bg-white p-0.5" />
              <div className="flex flex-col">
                <span className="text-white font-serif tracking-widest text-sm font-semibold group-hover:text-gold-500 transition-colors duration-300 whitespace-nowrap">R SUTARIYA</span>
                <span className="text-gold-500 tracking-[0.25em] text-[7px] uppercase -mt-0.5 font-serif">EXPORTS</span>
              </div>
            </Link>

            {/* Desktop Navigation — visible at xl (1280px+) */}
            <div className="hidden xl:flex items-center gap-2 flex-1 justify-end">
              {/* Nav Links */}
              <div className="flex items-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavLinkClick(link.path)}
                    className={({ isActive }) => `relative py-2 px-2 text-[11px] uppercase tracking-wide font-serif transition-colors duration-300 whitespace-nowrap leading-none ${
                      isActive ? 'text-gold-500 font-semibold' : 'text-white/90 hover:text-gold-500'
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

              {/* Divider */}
              <div className="w-px h-5 bg-white/15 mx-1 flex-shrink-0" />

              {/* Language Switcher */}
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center gap-1 py-2 px-2 text-[11px] uppercase tracking-wide text-white/90 hover:text-gold-500 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                  <img 
                    src={`https://flagcdn.com/${currentLangObj.flagCode}.svg`} 
                    alt={currentLangObj.label} 
                    className="w-4 h-3 object-cover rounded-[1px] border border-white/10 flex-shrink-0 ml-0.5" 
                  />
                  <ChevronDown className={`w-3 h-3 text-white/70 transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-36 bg-[#121212] border border-gold-500/15 shadow-xl rounded-sm py-1 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs tracking-wider font-serif flex items-center gap-2 hover:bg-gold-500/10 hover:text-gold-500 transition-colors duration-200 cursor-pointer ${
                            language === lang.code ? 'text-gold-500 bg-gold-500/5' : 'text-white/85'
                          }`}
                        >
                          <img 
                            src={`https://flagcdn.com/${lang.flagCode}.svg`} 
                            alt={lang.label} 
                            className="w-4 h-3 object-cover rounded-[1px] border border-white/10" 
                          />
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
                className="p-1.5 text-white/90 hover:text-gold-500 transition-colors duration-300 cursor-pointer flex-shrink-0"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Inquiry Button */}
              <Link
                to="/contact"
                onClick={() => handleNavLinkClick('/contact')}
                className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-gold-500 text-gold-500 hover:text-black font-serif text-[11px] uppercase tracking-wide overflow-hidden transition-all duration-300 hover:bg-gold-500 shadow-[0_0_10px_rgba(197,168,128,0.05)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] rounded-sm cursor-pointer whitespace-nowrap flex-shrink-0"
              >
                {t('inquiry')}
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button & Toggles */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-white/90 hover:text-gold-500 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Language Switcher Dropdown for Mobile */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowMobileLangDropdown(!showMobileLangDropdown);
                    setIsOpen(false); // Close mobile menu drawer if dropdown clicked
                  }}
                  className="flex items-center gap-1 py-1.5 px-2 text-xs text-white/90 border border-white/20 rounded-sm cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                  <img 
                    src={`https://flagcdn.com/${currentLangObj.flagCode}.svg`} 
                    alt={currentLangObj.label} 
                    className="w-4 h-3 object-cover rounded-[1px] border border-white/10 flex-shrink-0" 
                  />
                  <ChevronDown className={`w-3 h-3 text-white/70 transition-transform duration-300 ${showMobileLangDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showMobileLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-32 bg-[#121212] border border-gold-500/15 shadow-xl rounded-sm py-1 z-50 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowMobileLangDropdown(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs tracking-wider font-serif flex items-center gap-2 hover:bg-gold-500/10 hover:text-gold-500 transition-colors duration-200 cursor-pointer ${
                            language === lang.code ? 'text-gold-500 bg-gold-500/5' : 'text-white/85'
                          }`}
                        >
                          <img 
                            src={`https://flagcdn.com/${lang.flagCode}.svg`} 
                            alt={lang.label} 
                            className="w-4 h-3 object-cover rounded-[1px] border border-white/10" 
                          />
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-gold-500 p-2 cursor-pointer"
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
            className="fixed top-[64px] left-0 w-full bg-[#0b0c10]/98 border-b border-gold-500/15 backdrop-blur-lg z-30 xl:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `block py-3 px-4 text-sm uppercase tracking-widest font-serif transition-colors ${
                    isActive ? 'text-gold-500 bg-gold-500/5 border-l-2 border-gold-500 pl-3.5 font-semibold' : 'text-white/90 hover:text-gold-500 border-l-2 border-transparent'
                  }`}
                  onClick={() => {
                    handleNavLinkClick(link.path);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-luxury-border px-4">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center py-3 bg-gold-500 text-black font-serif text-xs uppercase tracking-widest rounded-sm font-semibold hover:bg-gold-600 transition-colors"
                  onClick={() => {
                    handleNavLinkClick('/contact');
                    setIsOpen(false);
                  }}
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
