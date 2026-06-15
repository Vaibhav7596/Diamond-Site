import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const { t, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-bg-sec border-t border-luxury-border pt-16 pb-8 text-luxury-text-sec font-serif transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 border border-gold-500 rotate-45 flex items-center justify-center">
                <span className="text-gold-500 text-xs -rotate-45 font-semibold">RS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-text tracking-widest text-sm font-semibold group-hover:text-gold-500 transition-colors duration-300">R SUTARIYA</span>
                <span className="text-gold-500 tracking-[0.25em] text-[7px] uppercase -mt-1">EXPORTS</span>
              </div>
            </Link>
            <p className="text-xs text-luxury-text-sec/80 leading-relaxed mb-6 font-sans">
              Family-owned B2B diamond manufacturers since 1973. Pioneers in transitioning premium natural diamond cutting expertise into high-grade HPHT lab-grown diamond crystals for Europe.
            </p>
            {/* Inline Language Selector */}
            <div className="flex items-center gap-3 text-xs tracking-wider border-t border-luxury-border pt-4">
              <button onClick={() => setLanguage('en')} className="hover:text-gold-500 transition-colors uppercase cursor-pointer">EN</button>
              <span className="text-luxury-border">|</span>
              <button onClick={() => setLanguage('it')} className="hover:text-gold-500 transition-colors uppercase cursor-pointer">IT</button>
              <span className="text-luxury-border">|</span>
              <button onClick={() => setLanguage('fr')} className="hover:text-gold-500 transition-colors uppercase cursor-pointer">FR</button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-text text-xs uppercase tracking-widest mb-6 font-semibold border-b border-luxury-border pb-2">
              {t('brand')}
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-sans">
              <li>
                <Link to="/" className="hover:text-gold-500 transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-500 transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-gold-500 transition-colors">{t('nav.collection')}</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-gold-500 transition-colors">{t('nav.certs')}</Link>
              </li>
              <li>
                <Link to="/export-shipping" className="hover:text-gold-500 transition-colors">{t('nav.export')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-500 transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-luxury-text text-xs uppercase tracking-widest mb-6 font-semibold border-b border-luxury-border pb-2">
              Contact Office
            </h4>
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-luxury-text-sec leading-relaxed font-serif">
                  <strong className="text-luxury-text">R SUTARIYA EXPORTS</strong><br />
                  308, Vrundavan Diamond Center,<br />
                  Opp. Varachha Police Station,<br />
                  Varachha Main Road, Surat, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:Kinjal.791@gmail.com" className="hover:text-gold-500 transition-colors font-serif">
                  Kinjal.791@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="https://wa.me/919898507686" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors font-serif">
                  +91-9898507686 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          {/* Business Inquiry Call-out */}
          <div>
            <h4 className="text-luxury-text text-xs uppercase tracking-widest mb-6 font-semibold border-b border-luxury-border pb-2">
              Direct Assistance
            </h4>
            <p className="text-xs text-luxury-text-sec/80 leading-relaxed mb-4 font-sans">
              Connecting European wholesalers, manufacturers, and designers directly with factory pricing.
            </p>
            <a
              href="https://wa.me/919898507686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center w-full py-3 border border-gold-500 hover:border-gold-600 text-gold-500 hover:text-black font-serif text-xs uppercase tracking-widest hover:bg-gold-500 transition-all duration-300 rounded-sm cursor-pointer shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              WhatsApp Business
            </a>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="border-t border-luxury-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-luxury-text-sec/60">
          <p>© {currentYear} R SUTARIYA EXPORTS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-luxury-text transition-colors font-serif">Surat Diamond Export Authority</span>
            <span className="hover:text-luxury-text transition-colors font-serif">IGI & GIA Registered Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
