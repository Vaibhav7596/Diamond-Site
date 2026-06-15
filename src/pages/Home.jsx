import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import LightReflect from '../components/LightReflect';
import NumberCounter from '../components/NumberCounter';
import heroDiamond from '../assets/hero_diamond.png';
import { Award, ShieldCheck, Factory, Truck, UserCheck } from 'lucide-react';

import roundCut from '../assets/round_cut.jfif';
import ovalCut from '../assets/oval_cut.jfif';
import princessCut from '../assets/princess_cut.jfif';
import pearCut from '../assets/pear_cut.jfif';
import radiantCut from '../assets/radiant_cut.jfif';
import cushionCut from '../assets/cushion_cut.jfif';

const Home = () => {
  const { t } = useLanguage();

  const heroWords = t('home.heroTitle').split(' ');

  const trustIndicators = [
    t('home.trust.heritage'),
    t('home.trust.specialists'),
    t('home.trust.certified'),
    t('home.trust.export'),
    t('home.trust.direct'),
  ];

  const whyChooseUs = [
    { icon: <Award className="w-6 h-6 text-gold-500" />, title: t('home.whyUs.qualityTitle'), desc: t('home.whyUs.qualityDesc') },
    { icon: <ShieldCheck className="w-6 h-6 text-gold-500" />, title: t('home.whyUs.certTitle'), desc: t('home.whyUs.certDesc') },
    { icon: <Factory className="w-6 h-6 text-gold-500" />, title: t('home.whyUs.priceTitle'), desc: t('home.whyUs.priceDesc') },
    { icon: <Truck className="w-6 h-6 text-gold-500" />, title: t('home.whyUs.exportTitle'), desc: t('home.whyUs.exportDesc') },
    { icon: <UserCheck className="w-6 h-6 text-gold-500" />, title: t('home.whyUs.serviceTitle'), desc: t('home.whyUs.serviceDesc') },
  ];

  const collections = [
    { shape: "Round", image: roundCut, desc: t('home.collection.roundDesc'), sizes: "0.50ct - 15.0ct+" },
    { shape: "Oval", image: ovalCut, desc: t('home.collection.ovalDesc'), sizes: "0.70ct - 12.0ct+" },
    { shape: "Princess", image: princessCut, desc: t('home.collection.princessDesc'), sizes: "0.50ct - 10.0ct+" },
    { shape: "Pear", image: pearCut, desc: t('home.collection.pearDesc'), sizes: "0.80ct - 10.0ct+" },
    { shape: "Cushion", image: cushionCut, desc: t('home.collection.cushionDesc'), sizes: "1.00ct - 12.0ct+" },
    { shape: "Radiant", image: radiantCut, desc: t('home.collection.radiantDesc'), sizes: "0.80ct - 15.0ct+" },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-black overflow-hidden py-24">
        {/* Background Image Fade In */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 2.0 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroDiamond} 
            alt="Premium Loose Diamond Background" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>
        {/* Fixed dark gradient overlay to ensure contrast on white title always */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent z-0 pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center relative">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-4">Established Heritage Exporter</span>
          
          {/* Word-by-Word Reveal Headline */}
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-8 leading-tight max-w-4xl mx-auto text-white">
            {heroWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                className="inline-block mr-2 md:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline Fade Up */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
            className="text-gray-300 font-serif text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('home.heroSubtitle')}
          </motion.p>

          {/* CTA Buttons Stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] rounded-sm cursor-pointer"
            >
              {t('requestQuote')}
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gray-300 hover:border-gold-500 text-white hover:text-gold-500 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer"
            >
              {t('contactUs')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Indicators Banner */}
      <section className="bg-luxury-bg-sec border-y border-luxury-border py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-8 text-center">
            {trustIndicators.map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-2 font-serif text-xs uppercase tracking-widest text-gold-500/90 font-bold"
              >
                <div className="w-1.5 h-1.5 rotate-45 bg-gold-500 shrink-0" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Luxury Number Counters */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-luxury-border">
            {[
              { to: '50', from: 0, suffix: '+', label: t('yearsHeritage'), duration: 2.0, delay: 0 },
              { to: '1973', from: 1900, suffix: '', label: t('since1973'), duration: 2.5, delay: 0.1 },
              { to: '100', from: 0, suffix: '%', label: t('exportFocus'), duration: 1.8, delay: 0.2 },
              { to: '100', from: 0, suffix: '%', label: t('qualityStandards'), duration: 1.8, delay: 0.3 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="flex flex-col items-center justify-center py-10 px-4 group"
              >
                {/* Decorative top accent */}
                <div className="w-6 h-[1.5px] bg-gold-500/50 mb-6 group-hover:w-10 group-hover:bg-gold-500 transition-all duration-500" />
                <NumberCounter
                  to={item.to}
                  from={item.from}
                  suffix={item.suffix}
                  duration={item.duration}
                  delay={item.delay}
                />
                <p className="text-[10px] uppercase tracking-widest text-luxury-text-sec font-serif mt-4 text-center leading-relaxed">
                  {item.label}
                </p>
                {/* Decorative bottom accent */}
                <div className="w-6 h-[1.5px] bg-gold-500/30 mt-5 group-hover:w-10 group-hover:bg-gold-500/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Direct Value Chain</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.whyUs.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.whyUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/30 hover:shadow-[0_0_20px_rgba(197,168,128,0.05)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 border border-luxury-border rotate-45 flex items-center justify-center mb-8 bg-luxury-bg transition-colors duration-300 group-hover:border-gold-500">
                  <div className="-rotate-45">{item.icon}</div>
                </div>
                <h3 className="text-luxury-text text-base font-serif mb-3 tracking-wider group-hover:text-gold-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Shape Collections */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Our Diamond Cuts</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.collection.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.collection.subtitle')}
            </p>
          </div>

          {/* Staggered Card reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-luxury-card border border-luxury-card-border overflow-hidden relative group rounded-sm flex flex-col justify-between min-h-[380px]"
              >
                {/* Image Section with Light Sweep Reflection */}
                <div className="h-48 w-full relative overflow-hidden bg-black/5 dark:bg-black/45 border-b border-luxury-border flex items-center justify-center p-4">
                  <LightReflect>
                    <img 
                      src={item.image} 
                      alt={`${item.shape} Cut Diamond Preview`} 
                      className="w-full h-full object-contain filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  </LightReflect>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-luxury-text text-lg font-serif mb-2 tracking-wider group-hover:text-gold-500 transition-colors duration-300">
                      {item.shape}
                    </h3>
                    <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-4 min-h-[40px]">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-luxury-border pt-4 flex justify-between items-center">
                    <div className="text-left">
                      <span className="text-[9px] uppercase tracking-wider text-luxury-text-sec/60 block font-sans">{t('home.collection.sizes')}</span>
                      <span className="text-xs font-serif text-gold-500">{item.sizes}</span>
                    </div>
                    <Link
                      to="/collection"
                      className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                    >
                      {t('requestQuote')} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Certifications Preview */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Certificate Details */}
            <div className="lg:col-span-7 font-serif">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Authenticated Integrity</span>
              <h2 className="text-3xl md:text-4xl tracking-wide mb-6 text-luxury-text uppercase">
                {t('home.certPreview.title')}
              </h2>
              <p className="text-gold-500 uppercase tracking-widest text-xs font-semibold mb-4">
                {t('home.certPreview.subtitle')}
              </p>
              <p className="text-luxury-text-sec font-sans text-xs leading-relaxed mb-8">
                {t('home.certPreview.text')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-left border-t border-luxury-border pt-6">
                <div>
                  <span className="text-2xl font-bold text-luxury-text block">IGI</span>
                  <span className="text-[10px] text-luxury-text-sec font-sans">International Gemological Institute</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-luxury-text block">GIA</span>
                  <span className="text-[10px] text-luxury-text-sec font-sans">Gemological Institute of America</span>
                </div>
              </div>
            </div>

            {/* Certificate Cards Document Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col gap-4 relative"
            >
              {/* Gold border glow visual cards */}
              <div className="bg-luxury-card border border-luxury-card-border p-6 shadow-2xl relative rounded-sm group overflow-hidden">
                {/* Light Sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 border border-gold-500 rotate-45 flex items-center justify-center bg-luxury-bg">
                    <span className="text-gold-500 text-[10px] -rotate-45 font-bold">IGI</span>
                  </div>
                  <span className="text-[10px] text-luxury-text-sec font-mono">REPORT # LG12345678</span>
                </div>
                <h4 className="text-luxury-text text-sm font-serif uppercase tracking-widest mb-2">HPHT Lab-Grown Diamond grading</h4>
                <div className="space-y-1.5 text-[10px] text-luxury-text-sec font-sans">
                  <div className="flex justify-between border-b border-luxury-border pb-1"><span>Shape</span> <strong className="text-luxury-text">Round Brilliant</strong></div>
                  <div className="flex justify-between border-b border-luxury-border pb-1"><span>Carat Weight</span> <strong className="text-luxury-text">2.05 Carat</strong></div>
                  <div className="flex justify-between border-b border-luxury-border pb-1"><span>Color Grade</span> <strong className="text-luxury-text">E (Colorless)</strong></div>
                  <div className="flex justify-between border-b border-luxury-border pb-1"><span>Clarity Grade</span> <strong className="text-luxury-text">VVS2</strong></div>
                  <div className="flex justify-between border-b border-luxury-border pb-1"><span>Cut Grade</span> <strong className="text-luxury-text">Excellent</strong></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Export Coverage */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">European Logistics Network</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.exportCoverage.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.exportCoverage.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img 
                  src="https://flagcdn.com/it.svg" 
                  alt="Italy" 
                  className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10"
                />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.italyTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.italyDesc')}</p>
            </div>
            <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img 
                  src="https://flagcdn.com/fr.svg" 
                  alt="France" 
                  className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10"
                />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.franceTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.franceDesc')}</p>
            </div>
            <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img 
                  src="https://flagcdn.com/eu.svg" 
                  alt="Europe" 
                  className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10"
                />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.europeTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.europeDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call To Action (Always luxury contrasting dark footer block) */}
      <section className="relative py-28 md:py-36 bg-black overflow-hidden border-t border-luxury-border text-center">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-serif">
          <h2 className="text-3xl md:text-5xl tracking-wide mb-6 gold-gradient-text leading-tight uppercase">
            {t('home.cta.title')}
          </h2>
          <p className="text-gray-400 font-sans text-xs md:text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-black text-xs uppercase tracking-widest font-semibold font-sans rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              {t('requestQuote')}
            </Link>
            <Link 
              to="/export-shipping" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gold-500 text-gold-400 hover:text-white text-xs uppercase tracking-widest font-sans rounded-sm transition-all duration-300 cursor-pointer"
            >
              Learn Export Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
