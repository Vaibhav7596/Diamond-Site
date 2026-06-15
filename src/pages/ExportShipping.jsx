import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Plane, ShieldCheck, Warehouse, Clock, Package, Globe } from 'lucide-react';

const ExportShipping = () => {
  const { t } = useLanguage();

  const steps = [
    { label: t('exportPage.steps.step1'), desc: t('exportPage.steps.step1Desc') },
    { label: t('exportPage.steps.step2'), desc: t('exportPage.steps.step2Desc') },
    { label: t('exportPage.steps.step3'), desc: t('exportPage.steps.step3Desc') },
    { label: t('exportPage.steps.step4'), desc: t('exportPage.steps.step4Desc') },
    { label: t('exportPage.steps.step6'), desc: t('exportPage.steps.step6Desc') },
    { label: t('exportPage.steps.step7'), desc: t('exportPage.steps.step7Desc') },
  ];

  const originStats = [
    { value: '21.1702° N', label: 'Latitude' },
    { value: '72.8311° E', label: 'Longitude' },
    { value: 'Gujarat', label: 'State, India' },
    { value: 'IATA: BOM', label: 'Export Airport' },
  ];

  const destinations = [
    {
      flag: '🇮🇹',
      city: 'Italy',
      hubs: 'Milan · Rome · Vicenza · Valenza',
      transit: '2 – 3 Days',
      method: 'Armored Air Courier',
      detail: 'Direct door-to-door delivery to Italian wholesalers, goldsmiths, and fine jewelry ateliers. Full customs clearance handled on both ends.',
    },
    {
      flag: '🇫🇷',
      city: 'France',
      hubs: 'Paris · Lyon · Nice',
      transit: '3 – 4 Days',
      method: 'Insured Express',
      detail: 'Servicing Parisian jewelry maisons and boutique designers with fully insured armored logistics via Malca-Amit & Brinks.',
    },
    {
      flag: '🇪🇺',
      city: 'Rest of Europe',
      hubs: 'Antwerp · Amsterdam · Zurich',
      transit: '3 – 5 Days',
      method: 'Specialized Couriers',
      detail: 'Europe-wide delivery supported across diamond trading hubs and luxury jewelry centers on custom arrangement.',
    },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">

      {/* 1. Header */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3"
          >
            Direct Pipeline to Europe
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-6 leading-tight text-luxury-text uppercase"
          >
            {t('exportPage.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {t('exportPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* 2. Surat Origin — Premium Typography Layout */}
      <section className="py-28 md:py-36 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3">Export Hub of India</span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-6 text-luxury-text uppercase">Surat, Gujarat, India</h2>
              <p className="text-luxury-text-sec font-sans text-xs leading-relaxed mb-8">
                Surat is the undisputed global epicentre of diamond cutting and polishing — responsible for processing over 90% of the world's diamonds. R SUTARIYA EXPORTS operates within this highly specialized manufacturing zone, combining five decades of generational diamond expertise with state-of-the-art HPHT growth facilities.
              </p>

              {/* Facility Cards */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-5 bg-luxury-card border border-luxury-card-border rounded-sm hover:border-gold-500/25 transition-all duration-300">
                  <Warehouse className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">HPHT Growth Facility</h4>
                    <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">Thermodynamic press units operating at extreme pressure and temperature to yield Type IIa crystal matrices.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-luxury-card border border-luxury-card-border rounded-sm hover:border-gold-500/25 transition-all duration-300">
                  <Plane className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">Secure Air Export Pipeline</h4>
                    <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">Direct armored transit from Surat customs to Chhatrapati Shivaji International (BOM) Air Cargo Terminal.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-luxury-border mt-6 pt-5 text-[10px] text-gold-500 font-serif">
                <ShieldCheck className="w-4 h-4" />
                <span>Surat Customs Verified · Precious Cargo Cleared Origin</span>
              </div>
            </motion.div>

            {/* Right: Coordinate Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Coordinate Display Card */}
              <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm shadow-xl relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-gold-500/20 rounded-tr-sm" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-gold-500/20 rounded-bl-sm" />

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">Origin Coordinates</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {originStats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="border-b border-luxury-border pb-4"
                    >
                      <span className="text-lg font-serif font-bold text-luxury-text block">{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-wider text-luxury-text-sec font-sans">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-luxury-border flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span className="text-xs font-serif text-luxury-text-sec">Surat Diamond Bourse, Ring Road, Surat — 395002</span>
                </div>
              </div>

              {/* Transit Time Card */}
              <div className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm flex items-center gap-5 hover:border-gold-500/25 transition-all duration-300">
                <div className="w-14 h-14 border border-gold-500/40 rotate-45 flex items-center justify-center bg-luxury-bg shrink-0">
                  <Clock className="w-5 h-5 text-gold-500 -rotate-45" />
                </div>
                <div>
                  <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">Average Transit to Europe</h4>
                  <p className="text-luxury-text-sec text-xs font-sans leading-relaxed">2 – 5 Business Days · Fully Insured · Door-to-Door</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Export Destinations — Premium Destination Cards */}
      <section className="py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Global Logistics Network</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4 text-luxury-text uppercase">Export Destinations</h2>
            <p className="text-luxury-text-sec font-sans text-xs max-w-xl mx-auto leading-relaxed">
              Directly connecting Surat's diamond manufacturing hub to the premier wholesale and luxury jewellery centres across Europe.
            </p>
          </div>

          {/* Origin Node */}
          <div className="flex flex-col items-center mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-luxury-card border-2 border-gold-500 px-8 py-5 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.12)] relative"
            >
              <div className="absolute -top-2 -right-2 w-4 h-4 rotate-45 bg-gold-500" />
              <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold text-center mb-1">Origin</p>
              <h3 className="text-luxury-text font-serif text-lg font-bold tracking-wider text-center">🇮🇳 Surat, India</h3>
            </motion.div>

            {/* Animated vertical connector */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
              className="w-[1.5px] h-12 bg-gradient-to-b from-gold-500 to-gold-500/30 origin-top"
            />

            {/* Horizontal bar connector */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.7, ease: 'easeInOut' }}
              className="w-full max-w-3xl h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-center"
            />
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0">
            {destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Vertical drop connector from bar */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 + idx * 0.1, ease: 'easeInOut' }}
                    className="w-[1.5px] h-8 bg-gradient-to-b from-gold-500/60 to-gold-500/20 origin-top"
                  />
                </div>

                <div className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/30 hover:shadow-[0_0_25px_rgba(197,168,128,0.06)] transition-all duration-300 group">
                  <span className="text-4xl block mb-4">{dest.flag}</span>
                  <h3 className="text-luxury-text text-xl font-serif font-bold tracking-wider mb-1 group-hover:text-gold-500 transition-colors duration-300">{dest.city}</h3>
                  <p className="text-[10px] text-gold-500/80 font-sans uppercase tracking-widest mb-4">{dest.hubs}</p>
                  <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-6">{dest.detail}</p>

                  <div className="border-t border-luxury-border pt-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-luxury-text-sec font-sans">Transit Time</span>
                      <span className="text-luxury-text font-serif font-semibold">{dest.transit}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-luxury-text-sec font-sans">Method</span>
                      <span className="text-luxury-text font-serif font-semibold">{dest.method}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Logistics Workflow */}
      <section className="py-28 md:py-36 bg-luxury-bg border-b border-luxury-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Secure Sourcing Workflow</span>
            <h2 className="text-3xl font-serif tracking-wide mb-4 text-luxury-text uppercase">Logistics Journey</h2>
            <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
              A highly coordinated, transparent diamond sourcing protocol tailored to minimise import frictions for European buyers.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative py-12">
            <div className="absolute top-6 left-12 right-12 h-[1px] bg-luxury-border -translate-y-1/2" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="absolute top-6 left-12 right-12 h-[1.5px] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 -translate-y-1/2 origin-left"
            />
            <div className="grid grid-cols-6 gap-8 relative z-10">
              {steps.map((step, idx) => {
                const stepTitle = step.label.split('. ')[1];
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                      className="w-12 h-12 rounded-full border border-gold-500 bg-luxury-card flex items-center justify-center font-serif text-gold-500 font-bold mb-10 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:bg-gold-500/5 transition-all duration-300 select-none"
                    >
                      {idx + 1}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.1, duration: 0.6 }}
                      className="text-center max-w-[160px]"
                    >
                      <h3 className="text-luxury-text text-xs font-serif uppercase tracking-widest mb-3 font-bold">{stepTitle}</h3>
                      <p className="text-luxury-text-sec text-[10px] leading-relaxed font-sans">{step.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="block lg:hidden relative pl-8 space-y-12">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="absolute top-0 bottom-0 left-3 w-[1.5px] bg-gradient-to-b from-gold-500 via-gold-400 to-transparent origin-top"
            />
            {steps.map((step, idx) => {
              const stepTitle = step.label.split('. ')[1];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full border border-gold-500 bg-luxury-card flex items-center justify-center font-serif text-gold-500 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div className="bg-luxury-card border border-luxury-card-border p-5 rounded-sm">
                    <h3 className="text-luxury-text text-sm font-serif uppercase tracking-widest mb-2 font-bold">{stepTitle}</h3>
                    <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Secure Shipping & Trust Info */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-6">
              <h3 className="text-luxury-text text-xl font-serif uppercase tracking-wider border-b border-luxury-border pb-3">{t('exportPage.shippingTitle')}</h3>
              <ul className="space-y-4 font-sans text-xs text-luxury-text-sec">
                {[t('exportPage.shipping1'), t('exportPage.shipping2'), t('exportPage.shipping3'), t('exportPage.shipping4')].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-luxury-text text-xl font-serif uppercase tracking-wider border-b border-luxury-border pb-3">{t('exportPage.whyTrustTitle')}</h3>
              <ul className="space-y-4 font-sans text-xs text-luxury-text-sec">
                {[t('exportPage.trust1'), t('exportPage.trust2'), t('exportPage.trust3'), t('exportPage.trust4')].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ExportShipping;
