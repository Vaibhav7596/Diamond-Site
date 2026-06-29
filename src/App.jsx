import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSelection from './components/LanguageSelection';
import { motion } from 'framer-motion';

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Collection from './pages/Collection';
import Certifications from './pages/Certifications';
import ExportShipping from './pages/ExportShipping';
import Contact from './pages/Contact';
import DiamondJourney from './pages/DiamondJourney';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Global floating WhatsApp CTA
const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/919898507686?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20HPHT%20lab-grown%20diamonds."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.35)] cursor-pointer select-none"
    style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
    aria-label="Chat on WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.852L.057 23.998l6.306-1.451A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.37l-.36-.213-3.721.856.88-3.63-.234-.371A9.818 9.818 0 1112 21.818z"/>
    </svg>
    <span className="text-white font-sans text-xs font-semibold tracking-wide whitespace-nowrap">WhatsApp Us</span>
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping pointer-events-none" />
  </motion.a>
);

// Site Wrapper
const MainLayout = () => {
  const { language } = useLanguage();

  // Show splash page if language is not selected yet
  if (!language) {
    return <LanguageSelection />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-luxury-bg text-luxury-text transition-colors duration-500 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/export-shipping" element={<ExportShipping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diamond-journey" element={<DiamondJourney />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;
