import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Search, Eye, Ruler, ShieldCheck } from 'lucide-react';

import HeroSection from '../HeroSection';
import FeatureCard from '../FeatureCard';
import MetricsPanel from '../MetricsPanel';

const Step05 = () => {
  const { t } = useLanguage();
  const stepData = t('diamondJourney.step5');

  const metrics = [
    { label: stepData.spec1Label, value: stepData.spec1Val },
    { label: stepData.spec2Label, value: stepData.spec2Val },
    { label: stepData.spec3Label, value: stepData.spec3Val },
    { label: stepData.spec4Label, value: stepData.spec4Val },
    { label: stepData.spec5Label, value: stepData.spec5Val },
  ];

  const workflowSteps = [
    stepData.flow1, stepData.flow2, stepData.flow3, stepData.flow4, stepData.flow5
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <HeroSection 
        step={stepData.number}
        title={stepData.title}
        subtitle={stepData.subtitle}
        body={stepData.body}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard icon={Search} title={stepData.card1Title} body={stepData.card1Body} />
          <FeatureCard icon={Eye} title={stepData.card2Title} body={stepData.card2Body} />
          <FeatureCard icon={Ruler} title={stepData.card3Title} body={stepData.card3Body} />
          <FeatureCard icon={ShieldCheck} title={stepData.card4Title} body={stepData.card4Body} />
        </div>
        <div className="w-full">
          <MetricsPanel title={stepData.panelTitle} metrics={metrics} />
        </div>
      </div>
    </motion.div>
  );
};

export default Step05;
