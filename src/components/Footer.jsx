import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Award, Globe, ShieldCheck, Gem } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Footer = () => {
  const { t, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const certBadges = [
    { label: 'IGI Certified', icon: Award },
    { label: 'GIA Partner', icon: Award },
    { label: 'HRD Antwerp', icon: Award },
    { label: 'IIDGR Verified', icon: ShieldCheck },
  ];

  return (
    <footer className="bg-luxury-bg-sec border-t border-luxury-border text-luxury-text-sec font-serif transition-colors duration-500">

      {/* ── Tagline Belt ── */}
      <div className="border-b border-luxury-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-serif mb-1">Since 1973 · Surat (Gujarat), India</p>
            <p className="text-luxury-text font-serif text-sm md:text-base tracking-wide">
              Precision Crafted. Ethically Grown. Globally Trusted.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {certBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-luxury-text-sec/70 hover:text-gold-500 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-gold-500/60" />
                  {badge.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <Link 
              to="/" 
              onClick={() => handleNavLinkClick('/')}
              className="flex items-center gap-3 mb-5 group"
            >
              <img src={logoImg} alt="R SUTARIYA EXPORTS Logo" className="h-8 w-8 object-contain rounded-sm bg-white p-0.5" />
              <div className="flex flex-col">
                <span className="text-luxury-text tracking-widest text-sm font-semibold group-hover:text-gold-500 transition-colors duration-300">R SUTARIYA</span>
                <span className="text-gold-500 tracking-[0.25em] text-[7px] uppercase -mt-1">EXPORTS</span>
              </div>
            </Link>
            <p className="text-xs text-luxury-text-sec/75 leading-relaxed mb-5 font-sans">
              Family-owned B2B diamond manufacturers from Surat (Gujarat), India. Pioneers in premium HPHT &amp; CVD lab-grown diamond production for global jewelry markets — Europe, UK &amp; USA.
            </p>

            {/* Capabilities Snapshot */}
            <div className="space-y-1.5 border-t border-luxury-border pt-4 mb-5">
              {[
                { icon: Gem, text: 'HPHT & CVD · 16+ Shapes' },
                { icon: Globe, text: 'Export to Italy · France · UK · USA · EU' },
                { icon: ShieldCheck, text: 'IGI · GIA · HRD · IIDGR' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] text-luxury-text-sec/65 font-sans">
                  <Icon className="w-3 h-3 text-gold-500/60 shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Language Selector */}
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
              Navigate
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-sans">
              <li><Link to="/" onClick={() => handleNavLinkClick('/')} className="hover:text-gold-500 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" onClick={() => handleNavLinkClick('/about')} className="hover:text-gold-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/collection" onClick={() => handleNavLinkClick('/collection')} className="hover:text-gold-500 transition-colors">{t('nav.collection')}</Link></li>
              <li><Link to="/certifications" onClick={() => handleNavLinkClick('/certifications')} className="hover:text-gold-500 transition-colors">{t('nav.certs')}</Link></li>
              <li><Link to="/export-shipping" onClick={() => handleNavLinkClick('/export-shipping')} className="hover:text-gold-500 transition-colors">{t('nav.export')}</Link></li>
              <li><Link to="/diamond-journey" onClick={() => handleNavLinkClick('/diamond-journey')} className="hover:text-gold-500 transition-colors">{t('nav.journey')}</Link></li>
              <li><Link to="/contact" onClick={() => handleNavLinkClick('/contact')} className="hover:text-gold-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>

            {/* B2B Quick Stats */}
            <div className="mt-8 border-t border-luxury-border pt-5 space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif mb-3">Supply Capabilities</p>
              {[
                '0.005 CT – 5.00 CT',
                'Clarity: IF – I2',
                'Color: D – M',
              ].map((item, i) => (
                <p key={i} className="text-[10px] text-luxury-text-sec/65 font-sans">{item}</p>
              ))}
            </div>
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
                  Room No. 106, Vrundavan Diamond Center,<br />
                  Opp. Central Warehouse, Varachha Police Station,<br />
                  Varachha Main Road, Surat – 395006, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:rsutariyaexports@gmail.com" className="hover:text-gold-500 transition-colors font-serif">
                  rsutariyaexports@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="https://wa.me/919898507686" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors font-serif">
                  +91-9898507686 (WhatsApp)
                </a>
              </li>
            </ul>

            {/* Export Markets */}
            <div className="mt-6 border-t border-luxury-border pt-5">
              <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif mb-3">Export Markets</p>
              <div className="flex flex-wrap gap-2">
                {['🇮🇹 Italy', '🇫🇷 France', '🇬🇧 UK', '🇺🇸 USA (New York)', '🇧🇪 Belgium', '🇨🇭 Switzerland', '🇳🇱 Netherlands'].map((m, i) => (
                  <span key={i} className="text-[10px] font-sans text-luxury-text-sec/65 border border-luxury-border px-2 py-1 rounded-sm">{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Business Inquiry CTA */}
          <div>
            <h4 className="text-luxury-text text-xs uppercase tracking-widest mb-6 font-semibold border-b border-luxury-border pb-2">
              Start Sourcing
            </h4>
            <p className="text-xs text-luxury-text-sec/75 leading-relaxed mb-5 font-sans">
              Connect directly with our export team for wholesale pricing, custom orders, and certification support. No minimum order required for first samples.
            </p>
            <a
              href="https://wa.me/919898507686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center w-full py-3 border border-gold-500 hover:border-gold-600 text-gold-500 hover:text-black font-serif text-xs uppercase tracking-widest hover:bg-gold-500 transition-all duration-300 rounded-sm cursor-pointer shadow-sm mb-3"
            >
              <Send className="w-3.5 h-3.5" />
              WhatsApp Inquiry
            </a>
            <a
              href="mailto:rsutariyaexports@gmail.com"
              className="inline-flex items-center gap-2 justify-center w-full py-2.5 border border-luxury-border hover:border-gold-500/50 text-luxury-text-sec hover:text-gold-500 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              Email Us
            </a>

            {/* Trust note */}
            <div className="mt-5 flex items-start gap-2 text-[10px] text-luxury-text-sec/50 font-sans leading-relaxed">
              <ShieldCheck className="w-3 h-3 text-gold-500/50 shrink-0 mt-0.5" />
              <span>All shipments fully insured via Malca-Amit &amp; Brinks. KIMBERLEY PROCESS compliant.</span>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-luxury-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-sans text-luxury-text-sec/50">
          <p>© {currentYear} R SUTARIYA EXPORTS — All Rights Reserved. Surat, Gujarat, India.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="font-serif tracking-wide">Surat Diamond Export Authority</span>
            <span className="font-serif tracking-wide">IGI &amp; GIA Registered</span>
            <span className="font-serif tracking-wide">Kimberley Process Compliant</span>
            <span className="font-serif tracking-wide">HPHT · CVD Manufacturer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
