import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

const Certifications = () => {
  const { t } = useLanguage();

  const qcSteps = [
    { title: t('certsPage.step1'), desc: t('certsPage.step1Desc') },
    { title: t('certsPage.step2'), desc: t('certsPage.step2Desc') },
    { title: t('certsPage.step3'), desc: t('certsPage.step3Desc') },
    { title: t('certsPage.step4'), desc: t('certsPage.step4Desc') },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">
      
      {/* Header */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3">Independent Verification</span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
          >
            {t('certsPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {t('certsPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Lab Details */}
      <section className="py-24 md:py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* IGI */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 relative group shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-gold-500 rotate-45 flex items-center justify-center bg-luxury-bg">
                  <span className="-rotate-45 font-bold text-gold-500 text-sm">IGI</span>
                </div>
                <div>
                  <h3 className="text-luxury-text text-lg font-serif tracking-wider font-bold">{t('certsPage.igiTitle')}</h3>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-text-sec/60 font-sans">Lab-Grown Specialist</span>
                </div>
              </div>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-6">
                {t('certsPage.igiDetail') || t('certsPage.igiDesc')}
              </p>
              <div className="border-t border-luxury-border pt-4 flex gap-4 text-[10px] text-gold-600 font-serif">
                <span>✓ Verified Growth: HPHT</span>
                <span>✓ Laser Girdle Inscription</span>
              </div>
            </motion.div>

            {/* GIA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 relative group shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-gold-500 rotate-45 flex items-center justify-center bg-luxury-bg">
                  <span className="-rotate-45 font-bold text-gold-500 text-sm">GIA</span>
                </div>
                <div>
                  <h3 className="text-luxury-text text-lg font-serif tracking-wider font-bold">{t('certsPage.giaTitle')}</h3>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-text-sec/60 font-sans">Universal Standard</span>
                </div>
              </div>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-6">
                {t('certsPage.giaDetail') || t('certsPage.giaDesc')}
              </p>
              <div className="border-t border-luxury-border pt-4 flex gap-4 text-[10px] text-gold-600 font-serif">
                <span>✓ Detailed Color/Clarity Audits</span>
                <span>✓ Natural Diamond Matching Standards</span>
              </div>
            </motion.div>

            {/* HRD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/25 transition-all duration-300 relative group shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-gold-500 rotate-45 flex items-center justify-center bg-luxury-bg">
                  <span className="-rotate-45 font-bold text-gold-500 text-sm">HRD</span>
                </div>
                <div>
                  <h3 className="text-luxury-text text-lg font-serif tracking-wider font-bold">{t('certsPage.hrdTitle') || 'HRD Antwerp'}</h3>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-text-sec/60 font-sans">European Expertise</span>
                </div>
              </div>
              <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mb-6">
                {t('certsPage.hrdDetail') || 'European diamond certification expertise. Highly respected by European wholesalers and retail jewelry brands.'}
              </p>
              <div className="border-t border-luxury-border pt-4 flex gap-4 text-[10px] text-gold-600 font-serif">
                <span>✓ High European Standing</span>
                <span>✓ Precise Optical Profiling</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QC Steps */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Internal Audits</span>
            <h2 className="text-3xl font-serif tracking-wide text-luxury-text uppercase">
              {t('certsPage.processTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {qcSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-luxury-card border border-luxury-card-border p-8 rounded-sm hover:border-gold-500/20 transition-all duration-300 shadow-md"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-gold-500" />
                  <h3 className="text-luxury-text text-sm font-serif tracking-wider font-bold">{step.title}</h3>
                </div>
                <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-24 md:py-32 bg-luxury-bg border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Buyer Guarantees</span>
            <h2 className="text-3xl font-serif tracking-wide text-luxury-text uppercase">
              {t('certsPage.compliance.title') || 'Trust & Compliance'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('certsPage.compliance.shipping') || 'Secure International Shipping', desc: t('certsPage.compliance.shippingDesc') || 'Fully insured armored delivery (Brinks, Malca-Amit) directly to your jewelry business.' },
              { title: t('certsPage.compliance.docs') || 'Export Documentation Support', desc: t('certsPage.compliance.docsDesc') || 'Customs clearance, certificates of origin, and tax invoicing fully managed by our experts.' },
              { title: t('certsPage.compliance.pkg') || 'Professional Packaging', desc: t('certsPage.compliance.pkgDesc') || 'Vacuum-sealed tamper-evident packaging protects diamond parcels in transit.' },
              { title: t('certsPage.compliance.qc') || 'Quality Control Procedures', desc: t('certsPage.compliance.qcDesc') || 'Every diamond undergoes dual testing: digital verification and manual inspection.' },
              { title: t('certsPage.compliance.comm') || 'Responsive B2B Communication', desc: t('certsPage.compliance.commDesc') || 'Multilingual support in English, Italian, and French to streamline your sourcing.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-luxury-card border border-luxury-card-border p-6 rounded-sm hover:border-gold-500/25 transition-all duration-300"
              >
                <h4 className="text-luxury-text font-serif font-bold text-sm mb-2 uppercase tracking-wide">{item.title}</h4>
                <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specimen Certificate Verification Support */}
      <section className="py-24 md:py-32 bg-luxury-bg-sec border-t border-luxury-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gold-500/20 bg-luxury-card p-10 rounded-sm relative shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="font-serif">
              <h3 className="text-2xl text-luxury-text mb-3 tracking-wide">Verification Support</h3>
              <p className="text-luxury-text-sec text-xs font-sans leading-relaxed mb-8 max-w-md">
                Every HPHT diamond exported by R SUTARIYA EXPORTS is accompanied by its corresponding certificate. You can cross-reference certificate serial numbers on official grading registers at any time.
              </p>
              <div className="flex gap-6">
                <a 
                  href="https://www.igi.org/reports/verify-your-report" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                >
                  Verify IGI Report →
                </a>
                <a 
                  href="https://www.gia.edu/reportcheck" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                >
                  Verify GIA Report →
                </a>
              </div>
            </div>
            
            <div className="w-40 h-40 border border-gold-500/20 rotate-45 flex items-center justify-center bg-black/5 dark:bg-black/40 shadow-inner shrink-0">
              <div className="-rotate-45 text-center">
                <ShieldCheck className="w-12 h-12 text-gold-500 mx-auto mb-2" />
                <span className="text-[9px] uppercase tracking-widest text-luxury-text-sec block font-serif">100% Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
