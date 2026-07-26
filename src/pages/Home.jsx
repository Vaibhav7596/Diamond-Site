import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUpItem, cardHoverProps, btnHoverProps, btnGhostHoverProps, viewportOnce } from '../utils/motionVariants';
import LightReflect from '../components/LightReflect';
import NumberCounter from '../components/NumberCounter';
import VideoHero from '../components/VideoHero';
import DiamondMarquee from '../components/DiamondMarquee';
import heroDiamond from '../assets/hero_diamond.png';
import { 
  Award, ShieldCheck, Factory, Truck, UserCheck, 
  Gem, Scissors, Search, Package, Globe, 
  Building2, Sparkles, TrendingUp, ShoppingBag, Heart, CheckCircle2,
  ChevronDown
} from 'lucide-react';

import roundCut from '../assets/round_cut.jfif';
import ovalCut from '../assets/oval_cut.jfif';
import princessCut from '../assets/princess_cut.jfif';
import pearCut from '../assets/pear_cut.jfif';
import marquiseCut from '../assets/Marquise(Cover).jpeg';
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
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What are lab-grown diamonds?",
      a: "Lab-grown diamonds are real diamonds created in controlled environments using advanced HPHT or CVD technology."
    },
    {
      q: "Are lab-grown diamonds real diamonds?",
      a: "Yes. They have the same chemical, physical, and optical properties as natural diamonds."
    },
    {
      q: "What is the difference between lab-grown and natural diamonds?",
      a: "The main difference is origin. Natural diamonds form underground, while lab-grown diamonds are created in laboratories."
    },
    {
      q: "What is HPHT diamond growth?",
      a: "HPHT (High Pressure High Temperature) replicates the natural conditions under which diamonds form."
    },
    {
      q: "What is CVD diamond growth?",
      a: "CVD (Chemical Vapor Deposition) grows diamonds layer by layer using carbon-rich gases in a controlled chamber."
    },
    {
      q: "Are your diamonds certified?",
      a: "Yes, diamonds can be supplied with internationally recognized certifications such as IGI or GIA, depending on availability and customer requirements."
    },
    {
      q: "Which diamond shapes do you offer?",
      a: "Round, Oval, Pear, Emerald, Radiant, Cushion, Princess, Marquise, Heart, and other custom shapes."
    },
    {
      q: "Do you export internationally?",
      a: "Yes, we export lab-grown diamonds worldwide with secure logistics and documentation support."
    },
    {
      q: "Can I request custom specifications?",
      a: "Yes. We can supply diamonds according to specific requirements including carat, color, clarity, cut, and shape."
    },
    {
      q: "How do I request a quotation?",
      a: "You can use the Inquiry form, WhatsApp button, or contact us directly for inventory and pricing information."
    },
    {
      q: "Are lab-grown diamonds sustainable?",
      a: "Lab-grown diamonds generally require less land disruption than traditional mining and offer a modern alternative for many buyers."
    },
    {
      q: "Why choose R Sutariya Exports?",
      a: "We combine advanced manufacturing, strict quality control, international certification, and reliable global export services."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
  
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
    { shape: "Round", image: roundCut, desc: t('home.collection.roundDesc'), sizes: "0.01ct - 10ct", shapeId: "round-brilliant" },
    { shape: "Oval", image: ovalCut, desc: t('home.collection.ovalDesc'), sizes: "0.1ct - 8.0ct", shapeId: "oval" },
    { shape: "Princess", image: princessCut, desc: t('home.collection.princessDesc'), sizes: "0.1ct - 8.0ct", shapeId: "princess" },
    { shape: "Pear", image: pearCut, desc: t('home.collection.pearDesc'), sizes: "0.15ct - 8.0ct", shapeId: "pear" },
    { shape: "Cushion", image: cushionCut, desc: t('home.collection.cushionDesc'), sizes: "0.2ct - 10ct", shapeId: "cushion" },
    { shape: "Marquise", image: marquiseCut, desc: t('home.collection.marquiseDesc'), sizes: "0.1ct - 5ct", shapeId: "marquise" },
  ];

  return (
    <div className="bg-transparent text-luxury-text transition-colors duration-500">

      {/* 1. Hero Section — Cinematic video scroll experience */}
      <VideoHero t={t} heroWords={t('home.heroTitle').split(' ')} />

      {/* Rest of page content */}
      <div className="relative z-10 bg-transparent">

      {/* 2. Trust Indicators Banner */}
      <section className="bg-luxury-bg-sec/80 backdrop-blur-md border-y border-luxury-border py-10 relative overflow-hidden">
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
      <section className="py-24 md:py-32 bg-luxury-bg/75 backdrop-blur-md border-b border-luxury-border relative">
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
      <section className="py-24 md:py-32 bg-luxury-bg-sec/80 backdrop-blur-md border-b border-luxury-border">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.07, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                {...cardHoverProps}
                className="bg-luxury-card/85 backdrop-blur-md border border-luxury-card-border p-8 rounded-xl hover:border-gold-500/30 transition-colors duration-300 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 180, borderColor: '#967b45' }}
                  transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                  className="w-10 h-10 border border-luxury-border rotate-45 flex items-center justify-center mb-6 bg-luxury-bg/80"
                >
                  <div className="-rotate-45">{item.icon}</div>
                </motion.div>
                <h3 className="text-luxury-text text-sm font-serif mb-2 tracking-wider group-hover:text-gold-500 transition-colors duration-300 uppercase">
                  {item.title}
                </h3>
                <p className="text-luxury-text-sec text-[11px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Industries We Serve Section */}
      <section className="py-24 md:py-32 bg-luxury-bg/75 backdrop-blur-md border-b border-luxury-border">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.07, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {industriesServe.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                {...cardHoverProps}
                className="bg-luxury-card/85 backdrop-blur-md border border-luxury-card-border p-6 rounded-xl hover:border-gold-500/25 transition-colors duration-300 group flex items-start gap-4 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.15, color: '#c5a880' }}
                  transition={{ duration: 0.25 }}
                  className="w-10 h-10 border border-luxury-border flex items-center justify-center bg-luxury-bg/80 shrink-0 group-hover:border-gold-500 transition-colors duration-300 rounded-lg"
                >
                  {item.icon}
                </motion.div>
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
          </motion.div>
        </div>
      </section>

      {/* 6. Product Capabilities Section */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec/80 backdrop-blur-md border-b border-luxury-border">
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

            <div className="lg:col-span-8 bg-luxury-card/85 backdrop-blur-md border border-luxury-card-border p-8 rounded-xl">
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
                  <motion.div {...btnHoverProps}>
                    <Link
                      to="/collection"
                      className="btn-gold inline-block px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-[10px] uppercase tracking-widest font-bold rounded-sm cursor-pointer"
                    >
                      Browse Catalog
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Trust Statistics Section (Updated number counters) */}
      <section className="py-24 md:py-32 bg-luxury-bg/75 backdrop-blur-md border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-luxury-border/60 gap-y-12 md:gap-y-0"
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {[
              { to: '10', from: 0, suffix: '+', label: t('home.stats.countriesServed'), duration: 1.8, delay: 0 },
              { to: '45', from: 0, suffix: '+', label: t('home.stats.yearsExperience'), duration: 1.8, delay: 0.15 },
              { to: '40000', from: 0, suffix: '+', label: t('home.stats.diamondsExported'), duration: 2.2, delay: 0.3 },
              { to: '1100', from: 0, suffix: '+', label: t('home.stats.satisfiedClients'), duration: 2.0, delay: 0.45 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center py-6 px-4 group cursor-default"
              >
                <motion.div
                  className="h-[1.5px] bg-gold-500/50 mb-4"
                  initial={{ width: '1.5rem' }}
                  whileInView={{ width: '2.5rem' }}
                  whileHover={{ width: '3rem', backgroundColor: '#967b45' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
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
                <motion.div
                  className="h-[1.5px] bg-gold-500/30 mt-4"
                  initial={{ width: '1.5rem' }}
                  whileInView={{ width: '2rem' }}
                  whileHover={{ width: '2.5rem', backgroundColor: 'rgba(150,123,69,0.6)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7.5. Infinite Diamond Shapes Marquee */}
      <DiamondMarquee />

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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {collections.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(150,123,69,0.12), 0 8px 20px rgba(0,0,0,0.18)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-luxury-card border border-luxury-card-border overflow-hidden relative group rounded-sm flex flex-col justify-between min-h-[380px]"
              >
                <Link to={`/collection?shape=${item.shapeId}`} className="h-48 w-full relative overflow-hidden bg-black/5 dark:bg-black/45 border-b border-luxury-border flex items-center justify-center p-4">
                  {/* Image with scale on hover */}
                  <LightReflect>
                    <img
                      src={item.image}
                      alt={`${item.shape} Cut Diamond Preview`}
                      className="w-full h-full object-contain filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </LightReflect>
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* View label */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/90 font-serif bg-black/40 px-3 py-1.5 backdrop-blur-sm rounded-sm">View Collection</span>
                  </div>
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
                    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                      <Link
                        to={`/collection?shape=${item.shapeId}`}
                        className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                      >
                        {t('requestQuote')} &rarr;
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 10. Export Map Section */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-b border-luxury-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Global Logistics Network</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">
              {t('home.exportCoverage.title')}
            </h2>
            <p className="text-luxury-text-sec font-serif max-w-xl mx-auto text-xs leading-relaxed">
              {t('home.exportCoverage.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Italy */}
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img src="https://flagcdn.com/it.svg" alt="Italy" className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10" />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.italyTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.italyDesc')}</p>
            </div>
            {/* France */}
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img src="https://flagcdn.com/fr.svg" alt="France" className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10" />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.franceTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.franceDesc')}</p>
            </div>
            {/* UK */}
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img src="https://flagcdn.com/gb.svg" alt="United Kingdom" className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10" />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.ukTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.ukDesc')}</p>
            </div>
            {/* USA */}
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img src="https://flagcdn.com/us.svg" alt="USA" className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10" />
              </div>
              <h3 className="text-luxury-text text-md font-serif mb-2 tracking-wider font-bold">{t('home.exportCoverage.usaTitle')}</h3>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{t('home.exportCoverage.usaDesc')}</p>
            </div>
            {/* Europe */}
            <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <img src="https://flagcdn.com/eu.svg" alt="Europe" className="h-8 w-12 object-cover rounded-[2px] shadow-sm border border-gold-500/10" />
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

      {/* FAQ Schema (JSON-LD) for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 13. Frequently Asked Questions Section */}
      <section className="py-24 md:py-32 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Expert Knowledge</span>
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-luxury-text uppercase">
                Frequently Asked Questions About Lab-Grown Diamonds
              </h2>
              <div className="w-16 h-[1px] bg-gold-500/35 mx-auto mt-6" />
            </div>

            <div className="space-y-2 border-t border-luxury-border/60">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className="border-b border-luxury-border/60 pb-2"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="w-full flex justify-between items-center py-4 text-left font-serif text-sm md:text-base text-luxury-text hover:text-gold-500 transition-colors duration-300 focus:outline-none group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 pr-4">
                        <Gem className="w-3.5 h-3.5 text-gold-500/80 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold tracking-wide text-xs md:text-sm">{item.q}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gold-500/80 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isOpen ? 'auto' : 0, 
                        opacity: isOpen ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pt-1 text-xs text-luxury-text-sec leading-relaxed font-sans pl-7 pr-2">
                        {item.a}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 14. Call To Action */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-luxury-border text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-serif">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl tracking-wide mb-6 gold-gradient-text leading-tight uppercase">
              {t('home.cta.title')}
            </h2>
            <p className="text-gray-400 font-sans text-xs md:text-sm max-w-xl mx-auto mb-10 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div {...btnHoverProps}>
                <Link
                  to="/contact"
                  className="btn-gold inline-block w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-black text-xs uppercase tracking-widest font-semibold font-sans rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  {t('requestQuote')}
                </Link>
              </motion.div>
              <motion.div {...btnGhostHoverProps}>
                <Link
                  to="/export-shipping"
                  className="btn-ghost inline-block w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gold-500/60 hover:border-gold-500 text-gold-400 hover:text-white text-xs uppercase tracking-widest font-sans rounded-sm cursor-pointer"
                >
                  Learn Export Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>{/* end z-10 wrapper */}
    </div>
  );
};

export default Home;
