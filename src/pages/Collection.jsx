import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import LightReflect from '../components/LightReflect';
import diamondShapes from '../assets/diamond_shapes.png';
import { ChevronRight } from 'lucide-react';

const Collection = () => {
  const { t } = useLanguage();

  const collections = [
    {
      shape: "Round",
      desc: t('home.collection.roundDesc'),
      carats: "0.50 - 15.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2 (Internally Flawless to Slightly Included)",
      labs: "IGI / GIA"
    },
    {
      shape: "Oval",
      desc: t('home.collection.ovalDesc'),
      carats: "0.70 - 12.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2",
      labs: "IGI / GIA"
    },
    {
      shape: "Princess",
      desc: t('home.collection.princessDesc'),
      carats: "0.50 - 10.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2",
      labs: "IGI / GIA"
    },
    {
      shape: "Pear",
      desc: t('home.collection.pearDesc'),
      carats: "0.80 - 10.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2",
      labs: "IGI"
    },
    {
      shape: "Radiant",
      desc: t('home.collection.radiantDesc'),
      carats: "0.80 - 15.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2",
      labs: "GIA / IGI"
    },
    {
      shape: "Cushion",
      desc: t('home.collection.cushionDesc'),
      carats: "1.00 - 12.0 ct+",
      colors: "D - H (Colorless / Near Colorless)",
      clarity: "IF - VS2",
      labs: "IGI / GIA"
    }
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">
      
      {/* Header */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3">Our Core Catalog</span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
          >
            {t('collectionPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {t('collectionPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {collections.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-luxury-card border border-luxury-card-border overflow-hidden rounded-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 md:p-10 hover:border-gold-500/25 transition-all duration-300 shadow-lg"
                >
                  {/* Left: Product visual */}
                  <div className="w-full lg:w-1/3 aspect-[4/3] bg-black/5 dark:bg-black/45 border border-luxury-border flex items-center justify-center p-6 relative rounded-sm">
                    <LightReflect>
                      <img 
                        src={diamondShapes} 
                        alt={`${item.shape} Cut Diamond Specs`} 
                        className="w-full h-full object-contain filter brightness-95"
                      />
                    </LightReflect>
                  </div>

                  {/* Right: Technical specifications */}
                  <div className="w-full lg:w-2/3 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-luxury-text text-2xl font-serif tracking-wider font-bold">{item.shape}</h2>
                        <span className="text-[9px] tracking-widest text-gold-500 uppercase font-serif px-2 py-0.5 border border-gold-500/20 bg-gold-500/5">HPHT Growth Cell</span>
                      </div>
                      
                      <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-8">
                        {item.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 font-sans text-xs">
                        <div className="flex justify-between border-b border-luxury-border pb-3 pr-2">
                          <span className="text-luxury-text-sec/60">{t('collectionPage.caratRange')}</span>
                          <strong className="text-luxury-text font-serif">{item.carats}</strong>
                        </div>
                        <div className="flex justify-between border-b border-luxury-border pb-3 pr-2">
                          <span className="text-luxury-text-sec/60">{t('collectionPage.colors')}</span>
                          <strong className="text-luxury-text font-serif">{item.colors}</strong>
                        </div>
                        <div className="flex justify-between border-b border-luxury-border pb-3 pr-2">
                          <span className="text-luxury-text-sec/60">{t('collectionPage.clarity')}</span>
                          <strong className="text-luxury-text font-serif">{item.clarity}</strong>
                        </div>
                        <div className="flex justify-between border-b border-luxury-border pb-3 pr-2">
                          <span className="text-luxury-text-sec/60">{t('collectionPage.certType')}</span>
                          <strong className="text-luxury-text font-serif">{item.labs}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start pt-4">
                      <Link
                        to="/contact"
                        state={{ shape: item.shape }}
                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-gold-500 hover:border-gold-600 text-gold-500 hover:text-black hover:bg-gold-500 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer shadow-sm"
                      >
                        {t('collectionPage.requestQuoteBtn')}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
