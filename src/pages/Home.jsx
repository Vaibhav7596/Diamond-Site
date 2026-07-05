import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import LightReflect from '../components/LightReflect';
import NumberCounter from '../components/NumberCounter';


import heroDiamond from '../assets/hero_diamond.png';
import { 
  Award, ShieldCheck, Factory, Truck, UserCheck, 
  Gem, Scissors, Search, Package, Globe, 
  Building2, Sparkles, TrendingUp, ShoppingBag, Heart, CheckCircle2 
} from 'lucide-react';

import roundCut from '../assets/round_cut.jfif';
import ovalCut from '../assets/oval_cut.jfif';
import princessCut from '../assets/princess_cut.jfif';
import pearCut from '../assets/pear_cut.jfif';
import radiantCut from '../assets/radiant_cut.jfif';
import cushionCut from '../assets/cushion_cut.jfif';

// Timeline Step Sub-component for sequential activation & illumination
const TimelineStep = ({ step, idx, isEven }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className="relative flex md:grid md:grid-cols-2 gap-8 md:gap-16 items-center pb-20 last:pb-0">
      {/* Icon node in center on desktop, left on mobile */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
        <motion.div
          animate={{
            borderColor: isInView ? '#967b45' : '#262626',
            backgroundColor: isInView ? '#1e1a12' : '#0a0a0a',
            color: isInView ? '#967b45' : '#737373',
            boxShadow: isInView ? '0 0 15px rgba(150,123,69,0.3)' : 'none'
          }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 border rounded-full flex items-center justify-center bg-luxury-bg-sec shrink-0"
        >
          {step.icon}
        </motion.div>
      </div>
      
      {/* Left side content (only visible on desktop for odd steps) */}
      <div className={`hidden md:block text-right pr-12 transition-all duration-700 transform ${isEven ? 'invisible' : ''} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-4'}`}>
        <span className="text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-1">Step {idx + 1}</span>
        <h4 className="text-luxury-text font-serif font-bold text-base uppercase tracking-wider mb-2">{step.title}</h4>
        <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{step.desc}</p>
      </div>

      {/* Right side content (visible on desktop for even steps, and on mobile for all steps) */}
      <div className={`pl-16 md:pl-12 text-left transition-all duration-700 transform ${isEven ? '' : 'md:invisible'} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
        <span className="text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-1">Step {idx + 1}</span>
        <h4 className="text-luxury-text font-serif font-bold text-base uppercase tracking-wider mb-2">{step.title}</h4>
        <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{step.desc}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 25;
    const y = (clientY / innerHeight - 0.5) * 25;
    setMousePosition({ x, y });
  };

  const heroWords = t('home.heroTitle').split(' ');

  const trustIndicators = [
    t('home.trust.heritage'),
    t('home.trust.specialists'),
    t('home.trust.certified'),
    t('home.trust.export'),
    t('home.trust.direct'),
  ];

  // 6 Why Choose R Sutariya Exports cards
  const whyChooseUs = [
    { icon: <Award className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.heritageTitle'), desc: t('home.whyChoose.heritageDesc') },
    { icon: <Gem className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.inventoryTitle'), desc: t('home.whyChoose.inventoryDesc') },
    { icon: <CheckCircle2 className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.certsTitle'), desc: t('home.whyChoose.certsDesc') },
    { icon: <Building2 className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.directTitle'), desc: t('home.whyChoose.directDesc') },
    { icon: <Globe className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.marketTitle'), desc: t('home.whyChoose.marketDesc') },
    { icon: <Truck className="w-5 h-5 text-gold-500" />, title: t('home.whyChoose.deliveryTitle'), desc: t('home.whyChoose.deliveryDesc') },
  ];

  // 6 Industries We Serve cards
  const industriesServe = [
    { icon: <Factory className="w-5 h-5 text-gold-500" />, title: t('home.industries.mfrTitle'), desc: t('home.industries.mfrDesc') },
    { icon: <TrendingUp className="w-5 h-5 text-gold-500" />, title: t('home.industries.wholesalerTitle'), desc: t('home.industries.wholesalerDesc') },
    { icon: <ShoppingBag className="w-5 h-5 text-gold-500" />, title: t('home.industries.retailerTitle'), desc: t('home.industries.retailerDesc') },
    { icon: <Heart className="w-5 h-5 text-gold-500" />, title: t('home.industries.privateTitle'), desc: t('home.industries.privateDesc') },
    { icon: <Sparkles className="w-5 h-5 text-gold-500" />, title: t('home.industries.designerTitle'), desc: t('home.industries.designerDesc') },
    { icon: <Globe className="w-5 h-5 text-gold-500" />, title: t('home.industries.importerTitle'), desc: t('home.industries.importerDesc') },
  ];

  // 6 Timeline Steps
  const creationSteps = [
    { icon: <Gem className="w-5 h-5" />, title: t('home.creationDelivery.step1Title'), desc: t('home.creationDelivery.step1Desc') },
    { icon: <Scissors className="w-5 h-5" />, title: t('home.creationDelivery.step2Title'), desc: t('home.creationDelivery.step2Desc') },
    { icon: <Search className="w-5 h-5" />, title: t('home.creationDelivery.step3Title'), desc: t('home.creationDelivery.step3Desc') },
    { icon: <Award className="w-5 h-5" />, title: t('home.creationDelivery.step4Title'), desc: t('home.creationDelivery.step4Desc') },
    { icon: <Package className="w-5 h-5" />, title: t('home.creationDelivery.step5Title'), desc: t('home.creationDelivery.step5Desc') },
    { icon: <Globe className="w-5 h-5" />, title: t('home.creationDelivery.step6Title'), desc: t('home.creationDelivery.step6Desc') },
  ];

  const collections = [
    { shape: "Round", image: roundCut, desc: t('home.collection.roundDesc'), sizes: "0.50ct - 15.0ct+", shapeId: "round-brilliant" },
    { shape: "Oval", image: ovalCut, desc: t('home.collection.ovalDesc'), sizes: "0.70ct - 12.0ct+", shapeId: "oval" },
    { shape: "Princess", image: princessCut, desc: t('home.collection.princessDesc'), sizes: "0.50ct - 10.0ct+", shapeId: "princess" },
    { shape: "Pear", image: pearCut, desc: t('home.collection.pearDesc'), sizes: "0.80ct - 10.0ct+", shapeId: "pear" },
    { shape: "Cushion", image: cushionCut, desc: t('home.collection.cushionDesc'), sizes: "1.00ct - 12.0ct+", shapeId: "cushion" },
    { shape: "Radiant", image: radiantCut, desc: t('home.collection.radiantDesc'), sizes: "0.80ct - 15.0ct+", shapeId: "square-radiant" },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">
      
      {/* 1. Hero Section — Sticky: next sections slide over it */}
      <div className="sticky top-0 z-0">
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-[95vh] flex items-center justify-center bg-black overflow-hidden py-24 -mt-[64px]"
      >
        {/* Background Image Container with Parallax + Zoom */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * 0.4, 
            y: mousePosition.y * 0.4,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
          className="absolute inset-0 z-0 opacity-45 pointer-events-none"
        >
          <motion.img 
            src={heroDiamond} 
            alt="Premium Loose Diamond Background" 
            className="w-full h-full object-cover object-center"
            animate={{
              scale: [1.02, 1.07, 1.02],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Subtle Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent z-0 pointer-events-none" />

        {/* Animated Light Rays & Reflective Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-screen overflow-hidden">
          <motion.div 
            animate={{ 
              x: ['-50%', '150%'],
              opacity: [0, 0.45, 0.45, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 5 
            }}
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent -skew-x-12"
          />
          <motion.div 
            animate={{ 
              x: ['-150%', '50%'],
              opacity: [0, 0.35, 0.35, 0]
            }}
            transition={{ 
              duration: 9, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 3 
            }}
            className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          />
          <div className="absolute top-0 left-1/4 w-32 h-[150%] bg-gradient-to-b from-white/5 to-transparent blur-[80px] rotate-[35deg]" />
          <div className="absolute top-0 right-1/4 w-40 h-[150%] bg-gradient-to-b from-white/3 to-transparent blur-[100px] -rotate-[25deg]" />
        </div>

        {/* Content Container (Float in opposite direction to create depth) */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * -0.15, 
            y: mousePosition.y * -0.15 
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center relative"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-4"
          >
            Established Heritage Exporter
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-8 leading-tight max-w-4xl mx-auto text-white">
            {heroWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-2 md:mr-3 pb-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.95, 
                    delay: idx * 0.04, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 font-serif text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('home.heroSubtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>
      </section>
      </div>

      {/* Spacer to push content below sticky hero */}
      <div className="relative z-10 bg-luxury-bg">

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
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex items-center gap-2 font-serif text-xs uppercase tracking-widest text-gold-500/90 font-bold"
              >
                <div className="w-1.5 h-1.5 rotate-45 bg-gold-500 shrink-0" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Our Heritage Section */}
      <section className="py-24 md:py-32 bg-luxury-bg border-b border-luxury-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block">
                {t('home.heritage.tagline')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase">
                {t('home.heritage.title')}
              </h2>
              <p className="text-luxury-text-sec text-sm leading-relaxed font-sans">
                {t('home.heritage.p1')}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-luxury-border">
                <div className="w-8 h-[1.5px] bg-gold-500" />
                <span className="text-gold-500 font-serif italic text-sm">
                  {t('about.quote') || '"Quality, Trust, Integrity, Continuous Growth"'}
                </span>
              </div>
              <div className="pt-2">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 text-xs font-serif uppercase tracking-widest transition-all duration-300 rounded-sm"
                >
                  {t('home.heritage.cta')} &rarr;
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 h-[350px] border border-luxury-border rounded-sm overflow-hidden bg-luxury-card p-4 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 z-20 font-serif text-white">
                <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block mb-1">Direct Diamond Sourcing</span>
                <h4 className="text-base uppercase tracking-wider mb-2">Surat Cutting Infrastructure</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-relaxed">Pioneering the transfer of traditional cutting standards to next-generation diamond growth.</p>
              </div>
              <img 
                src={heroDiamond} 
                alt="Heritage Diamond Processing" 
                className="w-full h-full object-cover object-center filter grayscale brightness-50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose R Sutariya Exports */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Direct Value Chain</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/30 hover:shadow-[0_0_20px_rgba(150,123,69,0.05)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-luxury-border rotate-45 flex items-center justify-center mb-6 bg-luxury-bg transition-colors duration-300 group-hover:border-gold-500">
                  <div className="-rotate-45">{item.icon}</div>
                </div>
                <h3 className="text-luxury-text text-sm font-serif mb-2 tracking-wider group-hover:text-gold-500 transition-colors duration-300 uppercase">
                  {item.title}
                </h3>
                <p className="text-luxury-text-sec text-[11px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve Section */}
      <section className="py-24 md:py-32 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">B2B Core Targets</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.industries.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.industries.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesServe.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-luxury-border flex items-center justify-center bg-luxury-bg shrink-0 group-hover:border-gold-500 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-luxury-text text-sm font-serif tracking-wider group-hover:text-gold-500 transition-colors duration-300 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-luxury-text-sec text-[11px] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product Capabilities Section */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block">B2B supply parameters</span>
              <h2 className="text-3xl font-serif tracking-wide text-luxury-text uppercase">
                {t('home.capabilities.title')}
              </h2>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
                {t('home.capabilities.subtitle')}
              </p>
            </div>

            <div className="lg:col-span-8 bg-luxury-card border border-luxury-card-border p-8 rounded-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: t('home.capabilities.shapesLabel'), val: t('home.capabilities.shapesVal') },
                  { label: t('home.capabilities.sizesLabel'), val: t('home.capabilities.sizesVal') },
                  { label: t('home.capabilities.clarityLabel'), val: t('home.capabilities.clarityVal') },
                  { label: t('home.capabilities.colorLabel'), val: t('home.capabilities.colorVal') },
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-luxury-border pb-4 last:border-0 sm:last:border-b">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block mb-1 font-serif">{item.label}</span>
                    <span className="text-sm font-serif text-luxury-text font-semibold">{item.val}</span>
                  </div>
                ))}
                <div className="col-span-1 sm:col-span-2 border-t border-luxury-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block mb-1 font-serif">{t('home.capabilities.certsLabel')}</span>
                    <span className="text-sm font-serif text-luxury-text font-semibold">{t('home.capabilities.certsVal')}</span>
                  </div>
                  <Link 
                    to="/collection"
                    className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-sm cursor-pointer"
                  >
                    Browse Catalog
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Trust Statistics Section (Updated number counters) */}
      <section className="py-24 md:py-32 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-luxury-border/60 gap-y-12 md:gap-y-0">
            {[
              { to: '10', from: 0, suffix: '+', label: t('home.stats.countriesServed'), duration: 1.8, delay: 0 },
              { to: '45', from: 0, suffix: '+', label: t('home.stats.yearsExperience'), duration: 1.8, delay: 0.15 },
              { to: '40000', from: 0, suffix: '+', label: t('home.stats.diamondsExported'), duration: 2.2, delay: 0.3 },
              { to: '1100', from: 0, suffix: '+', label: t('home.stats.satisfiedClients'), duration: 2.0, delay: 0.45 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center py-6 px-4 group"
              >
                <div className="w-6 h-[1.5px] bg-gold-500/50 mb-4 group-hover:w-10 group-hover:bg-gold-500 transition-all duration-500" />
                <NumberCounter
                  to={item.to}
                  from={item.from}
                  suffix={item.suffix}
                  duration={item.duration}
                  delay={item.delay}
                />
                <p className="text-[9px] uppercase tracking-widest text-luxury-text-sec font-serif mt-3 text-center leading-relaxed">
                  {item.label}
                </p>
                <div className="w-6 h-[1.5px] bg-gold-500/30 mt-4 group-hover:w-10 group-hover:bg-gold-500/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Featured Shape Collections */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Our Diamond Cuts</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.collection.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.collection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-luxury-card border border-luxury-card-border overflow-hidden relative group rounded-sm flex flex-col justify-between min-h-[380px]"
              >
                <Link to={`/collection?shape=${item.shapeId}`} className="h-48 w-full relative overflow-hidden bg-black/5 dark:bg-black/45 border-b border-luxury-border flex items-center justify-center p-4">
                  <LightReflect>
                    <img 
                      src={item.image} 
                      alt={`${item.shape} Cut Diamond Preview`} 
                      className="w-full h-full object-contain filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  </LightReflect>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/collection?shape=${item.shapeId}`}>
                      <h3 className="text-luxury-text text-lg font-serif mb-2 tracking-wider group-hover:text-gold-500 transition-colors duration-300">
                        {item.shape}
                      </h3>
                    </Link>
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
                      to={`/collection?shape=${item.shapeId}`}
                      className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                    >
                      {t('requestQuote')} &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 10. Export Map Section */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-b border-luxury-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">European Logistics Network</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.exportCoverage.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.exportCoverage.subtitle')}
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
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
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
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
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
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

      {/* 11. Certifications Preview */}
      <section className="py-24 md:py-32 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
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

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col gap-4 relative"
            >
              <div className="bg-luxury-card border border-luxury-card-border p-6 shadow-2xl relative rounded-sm group overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 border border-gold-500 rotate-45 flex items-center justify-center bg-luxury-bg">
                    <span className="text-gold-500 text-[10px] -rotate-45 font-bold">IGI</span>
                  </div>
                  <span className="text-[10px] text-luxury-text-sec font-mono">REPORT # LG12345678</span>
                </div>
                <h4 className="text-luxury-text text-sm font-serif uppercase tracking-widest mb-2 font-semibold">HPHT Lab-Grown Diamond</h4>
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

      {/* 12. Diamond Journey Teaser */}
      <section className="py-20 md:py-28 bg-luxury-bg-sec border-b border-luxury-border relative overflow-hidden">
        {/* Decorative backdrop word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[14vw] font-serif font-bold text-luxury-border/15 leading-none tracking-widest uppercase">Journey</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-serif font-bold block mb-3">
                {t('home.journeyTeaser.tagline')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-wide text-luxury-text mb-5 leading-tight">
                {t('home.journeyTeaser.title')}
              </h2>
              <p className="text-luxury-text-sec font-sans text-xs leading-relaxed mb-8 max-w-md">
                {t('home.journeyTeaser.subtitle')}
              </p>
              <Link
                to="/diamond-journey"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] rounded-sm"
              >
                {t('home.journeyTeaser.cta')} &rarr;
              </Link>
            </motion.div>

            {/* Right: step icon strip */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: <Gem className="w-5 h-5 text-gold-500" />, num: '01', label: t('home.creationDelivery.step1Title') },
                { icon: <Scissors className="w-5 h-5 text-gold-500" />, num: '02', label: t('home.creationDelivery.step2Title') },
                { icon: <Search className="w-5 h-5 text-gold-500" />, num: '03', label: t('home.creationDelivery.step3Title') },
                { icon: <Award className="w-5 h-5 text-gold-500" />, num: '04', label: t('home.creationDelivery.step4Title') },
                { icon: <Package className="w-5 h-5 text-gold-500" />, num: '05', label: t('home.creationDelivery.step5Title') },
                { icon: <Globe className="w-5 h-5 text-gold-500" />, num: '06', label: t('home.creationDelivery.step6Title') },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="bg-luxury-card border border-luxury-card-border p-4 rounded-sm hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="mb-2">{s.icon}</div>
                  <span className="text-[9px] text-gold-500/60 font-serif font-bold block">{s.num}</span>
                  <span className="text-luxury-text text-[11px] font-serif uppercase tracking-wider group-hover:text-gold-500 transition-colors">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. Call To Action */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-luxury-border text-center">
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
      </div>{/* end z-10 wrapper */}
    </div>
  );
};

export default Home;
