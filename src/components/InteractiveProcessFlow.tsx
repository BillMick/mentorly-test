import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, Users, ArrowRight, CheckCircle } from "lucide-react";
import GeneralSynoptic from "./synoptics/GeneralSynoptic";
import MentorRequestSynoptic from "./synoptics/MentorRequestSynoptic";
import RequestProcessingSynoptic from "./synoptics/RequestProcessingSynoptic";

const InteractiveProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fireflyPosition, setFireflyPosition] = useState(0);

  const steps = [
    {
      id: 'search',
      title: 'Explorer & Découvrir',
      description: 'Parcourez notre sélection de mentors vérifiés',
      icon: Search,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      fireflyColor: 'from-blue-400 to-blue-500',
      fireflyGlow: 'rgba(59, 130, 246, 0.8)',
      features: [
        'Filtres de recherche avancés',
        'Profils de mentors vérifiés',
        'Avis et évaluations disponibles'
      ]
    },
    {
      id: 'connect',
      title: 'Demander & Contacter',
      description: 'Envoyez des demandes de mentorat personnalisé',
      icon: MessageSquare,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      fireflyColor: 'from-purple-400 to-purple-500',
      fireflyGlow: 'rgba(147, 51, 234, 0.8)',
      features: [
        'Demandes personnalisées',
        'Messagerie directe',
        'Planification flexible'
      ]
    },
    {
      id: 'learn',
      title: 'Apprendre & Progresser',
      description: 'Démarrez votre parcours avec un accompagnement personnalisé',
      icon: Users,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      fireflyColor: 'from-green-400 to-green-500',
      fireflyGlow: 'rgba(34, 197, 94, 0.8)',
      features: [
        'Sessions individuelles',
        'Suivi des progrès',
        'Soutien continu'
      ]
    }
  ];

  // Update firefly position when active step changes
  useEffect(() => {
    setFireflyPosition(activeStep);
  }, [activeStep]);

  const getActiveChart = () => {
    switch (activeStep) {
      case 0:
        return <GeneralSynoptic />;
      case 1:
        return <MentorRequestSynoptic />;
      case 2:
        return <RequestProcessingSynoptic />;
      default:
        return <GeneralSynoptic />;
    }
  };

  const activeStepData = steps[activeStep];

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Side - Vertical Steps with Firefly */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-center mb-8">Grandes étapes</h3>
        
        {/* Vertical Connection Line */}
        <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gray-200 z-0"></div>
        
        {/* Animated Firefly */}
        <div 
          className={`absolute left-4 w-4 h-4 bg-gradient-to-r ${activeStepData.fireflyColor} rounded-full shadow-lg z-10 transition-all duration-1000 ease-out`}
          style={{
            top: `${120 + fireflyPosition * 200}px`,
            boxShadow: `0 0 20px ${activeStepData.fireflyGlow}, 0 0 40px ${activeStepData.fireflyGlow.replace('0.8', '0.4')}`,
            animation: 'pulse 2s ease-in-out infinite'
          }}
        >
          {/* Firefly glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${activeStepData.fireflyColor} rounded-full animate-ping opacity-75`}></div>
        </div>

        <div className="space-y-8 relative z-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            
            return (
              <div key={step.id} className="relative pl-16">
                {/* Step Card */}
                <Card 
                  className={`cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'ring-2 ring-blue-500 shadow-xl scale-105 bg-gradient-to-r from-blue-50 to-purple-50' 
                      : 'hover:shadow-lg hover:scale-102 bg-white'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Step Icon */}
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500
                        ${isActive ? step.color + ' shadow-lg' : isCompleted ? 'bg-gray-400' : 'bg-gray-300'}
                      `}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {step.description}
                        </p>
                        <ul className="space-y-1">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Step Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`
                w-4 h-4 rounded-full transition-all duration-300 shadow-sm
                ${index === activeStep 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Dynamic Process Chart */}
      <div className="lg:sticky lg:top-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Détails</h3>
          <p className="text-gray-600">
            Graphique interactif pour: <span className="font-semibold text-blue-600">{steps[activeStep].title}</span>
          </p>
        </div>
        
        <div className="transition-all duration-500 ease-in-out">
          {getActiveChart()}
        </div>
      </div>
    </div>
  );
};

export default InteractiveProcessFlow;
