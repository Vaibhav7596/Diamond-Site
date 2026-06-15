import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSelection from './components/LanguageSelection';

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Collection from './pages/Collection';
import Certifications from './pages/Certifications';
import ExportShipping from './pages/ExportShipping';
import Contact from './pages/Contact';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Site Wrapper
const MainLayout = () => {
  const { language } = useLanguage();

  // Show splash page if language is not selected yet
  if (!language) {
    return <LanguageSelection />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-luxury-bg text-luxury-text transition-colors duration-500">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/export-shipping" element={<ExportShipping />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
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
