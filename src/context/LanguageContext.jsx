import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    // Default to empty string to trigger LanguageSelection page if not set
    return saved || '';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    if (lang) {
      localStorage.setItem('language', lang);
    } else {
      localStorage.removeItem('language');
    }
  };

  const t = (path) => {
    const keys = path.split('.');
    // Fallback to English if language is not set or key not found
    let current = translations[language] || translations['en'];
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation is missing in the current language
        let enCurrent = translations['en'];
        for (const enKey of keys) {
          if (enCurrent && enCurrent[enKey] !== undefined) {
            enCurrent = enCurrent[enKey];
          } else {
            return path; // Return key path if not found in English either
          }
        }
        return enCurrent;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
export default LanguageContext;
