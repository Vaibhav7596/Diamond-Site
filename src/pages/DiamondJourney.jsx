import React, { useState, useEffect } from "react";
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 8) setCurrentStep(prev => prev + 1);
    else {
      // If it's the last step and user clicks Finish
      window.location.href = '/contact';
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <Step01 />;
      case 2: return <Step02 />;
      case 3: return <Step03 />;
      case 4: return <Step04 />;
      case 5: return <Step05 />;
      case 6: return <Step06 />;
      case 7: return <Step07 />;
      case 8: return <Step08 />;
      default: return <Step01 />;
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
        {renderStepContent()}
        
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
