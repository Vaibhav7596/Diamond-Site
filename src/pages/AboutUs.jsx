import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import LightReflect from '../components/LightReflect';
import craftsmanImage from '../assets/diamond_craftsman.png';
import { Gem, Award, Check, ArrowRight, Globe, MapPin } from 'lucide-react';

// Milestones, journeyPoints, and values are now defined dynamically inside the component to support multi-language routing.

const AboutUs = () => {
  const { t } = useLanguage();

  const milestoneIcons = ['🏡', '💎', '🏙️', '🤝', '⚗️', '✈️', '🌍'];
  const milestonesTranslated = t('about.milestones');
  const milestones = Array.isArray(milestonesTranslated) 
    ? milestonesTranslated.map((m, idx) => ({ ...m, icon: milestoneIcons[idx] || '💎' }))
    : [];

  const journeyPointsTranslated = t('about.geoPoints');
  const journeyPoints = Array.isArray(journeyPointsTranslated) ? journeyPointsTranslated : [];

  const valueIcons = [
    <Gem className="w-5 h-5 text-gold-500" />,
    <Check className="w-5 h-5 text-gold-500" />,
    <Award className="w-5 h-5 text-gold-500" />,
    <Globe className="w-5 h-5 text-gold-500" />
  ];
  const valuesTranslated = t('about.values');
  const values = Array.isArray(valuesTranslated)
    ? valuesTranslated.map((v, idx) => ({ ...v, icon: valueIcons[idx] || <Check className="w-5 h-5 text-gold-500" /> }))
    : [];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">

      {/* ── HERO HEADER ───────────────────────────────── */}
      <section className="relative py-28 md:py-40 bg-luxury-bg-sec border-b border-luxury-border overflow-hidden">
        {/* decorative background word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18vw] font-serif font-bold text-luxury-border/30 leading-none tracking-widest uppercase">Heritage</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-4"
          >
            {t('about.heroTagline')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif tracking-wide mb-6 gold-gradient-text uppercase leading-tight"
          >
            {t('about.heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-luxury-text-sec font-serif text-sm md:text-base max-w-2xl mx-auto italic leading-relaxed"
          >
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* ── OPENING STORY ─────────────────────────────── */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block">{t('about.storyTagline')}</span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase leading-tight">
                {t('about.storyHeading')}
              </h2>
              <div className="space-y-5 text-sm text-luxury-text-sec font-sans leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-luxury-border">
                <div className="w-8 h-[1.5px] bg-gold-500" />
                <span className="text-gold-500 font-serif italic text-sm">{t('about.quote')}</span>
              </div>
            </motion.div>

            {/* Craftsman image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] w-full rounded-sm overflow-hidden"
            >
              <LightReflect>
                <img
                  src={craftsmanImage}
                  alt="Diamond Craftsman Heritage"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </LightReflect>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISUAL TIMELINE ───────────────────────────── */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-y border-luxury-border relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">{t('about.journeyTagline')}</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase">
              {t('about.journeyTitle')}
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line — draws itself on scroll */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-gold-500 via-gold-500/60 to-transparent origin-top"
            />

            <div className="space-y-14">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Node dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-3 z-10 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                        className="w-6 h-6 rotate-45 border border-gold-500 bg-luxury-bg-sec flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rotate-0 bg-gold-500 rounded-full" />
                      </motion.div>
                    </div>

                    {/* Spacer on opposite side for desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.7, delay: 0.08 + idx * 0.07 }}
                      className={`ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] ${isEven ? 'md:mr-auto md:pl-0 md:pr-10' : 'md:ml-auto md:pl-10 md:pr-0'}`}
                    >
                      <div className="bg-luxury-card border border-luxury-card-border p-7 rounded-sm shadow-xl hover:border-gold-500/30 hover:shadow-gold-500/5 transition-all duration-400 group relative overflow-hidden">
                        {/* shine sweep */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-900" />
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xl leading-none">{m.icon}</span>
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold block">{m.era}</span>
                            <span className="text-[9px] uppercase tracking-wider text-luxury-text-sec font-sans">{m.label}</span>
                          </div>
                        </div>
                        <h3 className="text-luxury-text font-serif text-base tracking-wider font-bold mb-3 uppercase">{m.heading}</h3>
                        <p className="text-luxury-text-sec font-sans text-xs leading-relaxed">{m.body}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY MAP: Bhavnagar → Surat → Europe ── */}
      <section className="py-28 md:py-36 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">{t('about.geoTagline')}</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase">
              {t('about.geoTitle')}
            </h2>
          </div>

          {/* Journey route */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {journeyPoints.map((point, idx) => (
              <React.Fragment key={idx}>
                {/* Location card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  className="flex-1 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rotate-45 border border-gold-500 bg-luxury-card flex items-center justify-center mb-6 relative group hover:bg-gold-500/10 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-gold-500 -rotate-45" />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.2, duration: 0.5 }}
                      className="absolute inset-0 border border-gold-500/30 rotate-0 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-1">{point.role}</span>
                  <h3 className="text-luxury-text font-serif text-lg font-bold tracking-wide mb-2">{point.location}</h3>
                  <p className="text-luxury-text-sec font-sans text-xs leading-relaxed max-w-[180px]">{point.desc}</p>
                </motion.div>

                {/* Arrow connector */}
                {idx < journeyPoints.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
                    className="hidden md:flex items-center gap-2 flex-shrink-0 px-6 origin-left"
                  >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-gold-500/40 to-gold-500" />
                    <ArrowRight className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER LEGACY + VALUES ───────────────────── */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Leadership Heritage</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase">
              {t('about.legacyTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-sm text-luxury-text-sec font-sans leading-relaxed"
            >
              <p>{t('about.legacyDesc')}</p>
              <p>{t('about.legacyP2')}</p>
              <p>{t('about.legacyP3')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-luxury-card border border-luxury-card-border p-7 rounded-sm hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/15 transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-luxury-text font-serif text-sm font-bold tracking-wider uppercase mb-2">{v.title}</h3>
                  <p className="text-luxury-text-sec font-sans text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-4">{t('about.ctaTagline')}</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-6 text-luxury-text uppercase">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-luxury-text-sec font-sans text-xs leading-relaxed mb-10 max-w-xl mx-auto">
              {t('about.ctaDesc')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] rounded-sm"
            >
              {t('about.ctaButton')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
