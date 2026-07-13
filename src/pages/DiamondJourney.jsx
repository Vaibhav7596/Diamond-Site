import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import JourneyLayout from "../components/DiamondJourney/JourneyLayout";
import JourneySidebar from "../components/DiamondJourney/JourneySidebar";
import NavigationButtons from "../components/DiamondJourney/NavigationButtons";

import Step01 from "../components/DiamondJourney/steps/Step01";
import Step02 from "../components/DiamondJourney/steps/Step02";
import Step03 from "../components/DiamondJourney/steps/Step03";
import Step04 from "../components/DiamondJourney/steps/Step04";
import Step05 from "../components/DiamondJourney/steps/Step05";
import Step06 from "../components/DiamondJourney/steps/Step06";
import Step07 from "../components/DiamondJourney/steps/Step07";
import Step08 from "../components/DiamondJourney/steps/Step08";

const DiamondJourney = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Scroll to top when step changes
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 8) setCurrentStep(prev => prev + 1);
    else {
      // If it's the last step and user clicks Finish — use React Router navigate
      navigate('/contact');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <Step01 key="step1" />;
      case 2: return <Step02 key="step2" />;
      case 3: return <Step03 key="step3" />;
      case 4: return <Step04 key="step4" />;
      case 5: return <Step05 key="step5" />;
      case 6: return <Step06 key="step6" />;
      case 7: return <Step07 key="step7" />;
      case 8: return <Step08 key="step8" />;
      default: return <Step01 key="step1" />;
    }
  };

  return (
    <div className="bg-luxury-bg text-luxury-text w-full min-h-screen font-sans">
      <JourneyLayout 
        sidebar={
          <JourneySidebar 
            currentStep={currentStep} 
            onStepSelect={(step) => setCurrentStep(step)} 
          />
        }
      >
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>
        
        <NavigationButtons 
          onPrev={handlePrev} 
          onNext={handleNext} 
          isFirst={currentStep === 1} 
          isLast={currentStep === 8} 
        />
      </JourneyLayout>
    </div>
  );
};

export default DiamondJourney;
