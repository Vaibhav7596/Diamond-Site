import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import LightReflect from '../components/LightReflect';
import craftsmanImage from '../assets/diamond_craftsman.png';
import { Award, ShieldCheck, Gem, Check } from 'lucide-react';

const AboutUs = () => {
  const { t } = useLanguage();

  const timelineItems = [
    { year: "1973", text: t('about.timeline.t1973') },
    { year: "2021", text: t('about.timeline.t2021') },
    { year: "Present", text: t('about.timeline.tPresent') },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">
      
      {/* Page Header (Spacious Layout) */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3"
          >
            Our Diamond Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
          >
            {t('about.storyTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-serif text-sm md:text-base max-w-xl mx-auto italic leading-relaxed"
          >
            {t('about.storySubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Heritage & Values Story */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-sm text-luxury-text-sec font-sans leading-relaxed"
            >
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </motion.div>

            {/* Visual Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300">
                <Gem className="w-8 h-8 text-gold-500 mb-6" />
                <h3 className="text-luxury-text text-base font-serif mb-3 tracking-wider font-bold">Traditional Craft</h3>
                <p className="text-luxury-text-sec text-xs leading-relaxed">
                  Five decades of manual diamond cutting expertise integrated directly into polishing next-generation crystals.
                </p>
              </div>
              <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300">
                <Award className="w-8 h-8 text-gold-500 mb-6" />
                <h3 className="text-luxury-text text-base font-serif mb-3 tracking-wider font-bold">Modern HPHT Tech</h3>
                <p className="text-luxury-text-sec text-xs leading-relaxed">
                  Utilizing state-of-the-art growth cells providing maximum pressure and heat to yield pure carbon matrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Storytelling Timeline */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-y border-luxury-border relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Heritage Timeline</span>
            <h2 className="text-3xl font-serif tracking-wide text-luxury-text uppercase">Company Milestones</h2>
          </div>

          <div className="relative">
            {/* 1. Growing Timeline Center Connection Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-gold-500 via-gold-500 to-transparent origin-top"
            />

            {/* Timeline Milestones */}
            <div className="space-y-16">
              {timelineItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Node Dot marker */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rotate-45 border border-gold-500 bg-luxury-bg z-10 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.4 }}
                        className="w-1.5 h-1.5 rotate-45 bg-gold-500"
                      />
                    </div>

                    {/* Timeline card content with stagger reveal */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.3 }}
                      className={`ml-10 sm:ml-0 w-full sm:w-[45%] bg-luxury-card border border-luxury-card-border p-8 rounded-sm shadow-xl hover:border-gold-500/25 transition-all duration-300`}
                    >
                      <span className="font-serif text-lg font-bold text-gold-500 tracking-wider block mb-2">{item.year}</span>
                      <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{item.text}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Legacy Section */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Founder Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 h-[420px] w-full"
            >
              <LightReflect>
                <img 
                  src={craftsmanImage} 
                  alt="Founder Craftsmanship Heritage" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm"
                />
              </LightReflect>
            </motion.div>

            {/* Founder Story */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 font-serif"
            >
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Leadership Heritage</span>
              <h2 className="text-3xl tracking-wide mb-6 text-luxury-text uppercase">
                {t('about.legacyTitle')}
              </h2>
              <p className="text-luxury-text-sec font-sans text-xs leading-relaxed mb-8">
                {t('about.legacyDesc')}
              </p>
              
              {/* Values Checklist */}
              <div className="space-y-4 pt-6 border-t border-luxury-border font-sans text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-luxury-text font-medium">Uncompromising Integrity in Diamond Selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-luxury-text font-medium">Strict Ethical Manufacturing and Traceability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-luxury-text font-medium">Fostering Long-term European Partnerships</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
