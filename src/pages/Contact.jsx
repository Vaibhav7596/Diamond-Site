import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Check, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    email: '',
    whatsappNumber: '',
    diamondShape: '',
    caratRequirement: '',
    quantityRequirement: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill diamond shape if passed via route state
  useEffect(() => {
    if (location.state && location.state.shape) {
      setFormData(prev => ({
        ...prev,
        diamondShape: location.state.shape
      }));
    }
  }, [location]);

  const [honeypot, setHoneypot] = useState(''); // bot trap

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot protection — if honeypot field is filled, silently reject
    if (honeypot) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        access_key: '396b0ebd-4616-45e2-9daa-8f49bfa2a7da',
        subject: `B2B Diamond Inquiry — ${formData.companyName || formData.fullName}`,
        from_name: formData.fullName,
        replyto: formData.email,
        // Email body fields
        'Full Name': formData.fullName,
        'Company Name': formData.companyName,
        'Country': formData.country,
        'Email Address': formData.email,
        'WhatsApp Number': formData.whatsappNumber,
        'Diamond Shape': formData.diamondShape,
        'Carat Requirement': formData.caratRequirement,
        'Quantity Requirement': formData.quantityRequirement,
        'Additional Message': formData.message || 'N/A',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          country: '',
          email: '',
          whatsappNumber: '',
          diamondShape: '',
          caratRequirement: '',
          quantityRequirement: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg('Submission failed. Please contact us directly via WhatsApp or Email at rsutariyaexports@gmail.com');
    }
  };

  const diamondShapes = ["Round", "Oval", "Princess", "Pear", "Radiant", "Cushion", "Other / Mixed Parcel"];

  return (
    <div className="bg-transparent text-luxury-text transition-colors duration-500">
      
      {/* Header */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3">Global Communications</span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
          >
            {t('contactPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {t('contactPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-28 md:py-36 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-luxury-text text-xl font-serif tracking-wider mb-8 uppercase border-b border-luxury-border pb-3">
                  Contact Coordinates
                </h2>
                
                <ul className="space-y-6 font-sans text-xs text-luxury-text-sec">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">{t('contactPage.location')}</h4>
                      <p className="leading-relaxed font-serif">{t('brand')}<br />{t('contactPage.address')}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">Direct Email</h4>
                      <a href="mailto:rsutariyaexports@gmail.com" className="text-gold-500 hover:text-luxury-text transition-colors">
                        rsutariyaexports@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">WhatsApp Hotline</h4>
                      <a href="https://wa.me/919898507686" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-luxury-text transition-colors">
                        +91-9898507686
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-luxury-text font-serif font-bold text-sm mb-1">{t('contactPage.hours')}</h4>
                      <p className="font-serif">{t('contactPage.hoursVal')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full rounded-sm overflow-hidden border border-luxury-card-border shadow-xl">
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 bg-luxury-bg/90 backdrop-blur-sm px-4 py-2.5 border-b border-luxury-border pointer-events-none">
                    <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">R Sutariya Exports — Surat, Gujarat</span>
                  </div>
                  <iframe
                    title="R Sutariya Exports Location"
                    src="https://maps.google.com/maps?q=R+Sutariya+Exports,+Surat,+Gujarat,+India&output=embed&z=16"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: 'block', marginTop: '36px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/1gih6gbk8ukJ7pes5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-luxury-bg border-t border-luxury-border text-[10px] uppercase tracking-widest text-gold-500 hover:text-luxury-text font-serif transition-colors duration-200"
                >
                  <MapPin className="w-3 h-3" /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form / Success Screen */}
            <div className="lg:col-span-7 bg-luxury-card border border-luxury-card-border p-8 md:p-10 rounded-sm shadow-2xl relative min-h-[560px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-luxury-text text-xl font-serif tracking-wider mb-8 uppercase border-b border-luxury-border pb-3">
                      {t('contactPage.formTitle')}
                    </h3>

                    {errorMsg && (
                      <div className="bg-red-950/20 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-sm mb-6">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 text-xs text-luxury-text-sec font-sans">
                      {/* Honeypot anti-spam trap */}
                      <input 
                        type="checkbox" 
                        name="botcheck" 
                        className="hidden" 
                        style={{ display: 'none' }} 
                        onChange={(e) => setHoneypot(e.target.checked ? 'spammer' : '')} 
                      />
                      
                      {/* Name / Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="fullName" className="text-luxury-text font-medium">{t('contactPage.name')} *</label>
                          <input 
                            type="text" 
                            id="fullName" 
                            name="fullName"
                            required
                            value={formData.fullName} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="companyName" className="text-luxury-text font-medium">{t('contactPage.company')} *</label>
                          <input 
                            type="text" 
                            id="companyName" 
                            name="companyName"
                            required
                            value={formData.companyName} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                      </div>

                      {/* Country / Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="country" className="text-luxury-text font-medium">{t('contactPage.country')} *</label>
                          <input 
                            type="text" 
                            id="country" 
                            name="country"
                            required
                            placeholder="e.g. Italy, France"
                            value={formData.country} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-luxury-text font-medium">{t('contactPage.email')} *</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required
                            value={formData.email} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                      </div>

                      {/* WhatsApp / Shape */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="whatsappNumber" className="text-luxury-text font-medium">{t('contactPage.whatsapp')} *</label>
                          <input 
                            type="tel" 
                            id="whatsappNumber" 
                            name="whatsappNumber"
                            required
                            placeholder="e.g. +39 333 1234567"
                            value={formData.whatsappNumber} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="diamondShape" className="text-luxury-text font-medium">{t('contactPage.shape')} *</label>
                          <select 
                            id="diamondShape" 
                            name="diamondShape"
                            required
                            value={formData.diamondShape} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)] cursor-pointer"
                          >
                            <option value="">-- Choose Shape --</option>
                            {diamondShapes.map((shape) => (
                              <option key={shape} value={shape}>{shape}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Carat / Quantity */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="caratRequirement" className="text-luxury-text font-medium">{t('contactPage.carats')} *</label>
                          <input 
                            type="text" 
                            id="caratRequirement" 
                            name="caratRequirement"
                            required
                            placeholder="e.g. 1.5 - 2.5 ct"
                            value={formData.caratRequirement} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="quantityRequirement" className="text-luxury-text font-medium">{t('contactPage.quantity')} *</label>
                          <input 
                            type="text" 
                            id="quantityRequirement" 
                            name="quantityRequirement"
                            required
                            placeholder="e.g. 5 stones / 10 carats total"
                            value={formData.quantityRequirement} 
                            onChange={handleChange}
                            className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)]"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-luxury-text font-medium">{t('contactPage.message')}</label>
                        <textarea 
                          id="message" 
                          name="message"
                          rows="4"
                          value={formData.message} 
                          onChange={handleChange}
                          className="bg-luxury-bg border border-luxury-border focus:border-gold-500 text-luxury-text rounded-sm py-3.5 px-4 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.08)] resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] disabled:bg-gold-500/50 disabled:text-gray-500 cursor-pointer"
                        >
                          {isSubmitting ? t('loading') : t('submit')}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  // Premium luxury confirmation checkmark animation screen
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center text-center absolute inset-0 p-8"
                  >
                    {/* Drawing circle checkmark */}
                    <div className="mb-6 relative flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-20 h-20 rounded-full border-2 border-gold-500 bg-gold-500/5 flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Check className="w-10 h-10 text-gold-500" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <h3 className="text-luxury-text text-2xl font-serif tracking-wider mb-3 uppercase gold-gradient-text">
                      {t('successMsgTitle')}
                    </h3>
                    <p className="text-luxury-text-sec text-xs leading-relaxed max-w-sm mb-8">
                      {t('successMsgText')}
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 border border-gold-500 text-gold-500 hover:border-gold-600 hover:text-black hover:bg-gold-500 text-[10px] uppercase tracking-widest font-serif transition-all duration-300 rounded-sm cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp CTA is rendered globally in App.jsx */}
    </div>
  );
};

export default Contact;
