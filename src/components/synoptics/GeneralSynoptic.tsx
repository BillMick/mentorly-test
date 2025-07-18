
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, Eye, User, ArrowRight, Circle } from "lucide-react";

const GeneralSynoptic = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fireflyPosition, setFireflyPosition] = useState({ x: 50, y: 20 });

  const steps = [
    { id: 'start', label: 'Commencez votre parcours', icon: Circle, x: 50, y: 20, color: 'bg-green-500' },
    { id: 'search', label: 'Recherche par mots-clés', icon: Search, x: 25, y: 45, color: 'bg-blue-500' },
    { id: 'discover', label: 'Explorer et consulter un profil de mentor', icon: Eye, x: 75, y: 45, color: 'bg-purple-500' },
    { id: 'end', label: 'Prêt à entrer en contact', icon: Circle, x: 50, y: 70, color: 'bg-green-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = (prev + 1) % steps.length;
        setFireflyPosition({ x: steps[nextStep].x, y: steps[nextStep].y });
        return nextStep;
      });
    }, 4000); // Increased from 2500ms to 4000ms for slower movement

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
      <CardContent>
        <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">Explorer & Découvrir</h3>
        
        <div className="relative w-full h-80 bg-white rounded-lg border-2 border-blue-200 overflow-hidden">
          {/* Animated Firefly */}
          <div 
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg transition-all duration-3500 ease-in-out z-20"
            style={{
              left: `${fireflyPosition.x}%`,
              top: `${fireflyPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>

          {/* Process Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            
            return (
              <div
                key={step.id}
                className="absolute transition-all duration-500"
                style={{
                  left: `${step.x}%`,
                  top: `${step.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-500
                  ${isActive ? `${step.color} scale-125 shadow-lg` : 'bg-gray-400 scale-100'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className={`text-xs mt-2 text-center max-w-20 transition-all duration-300 ${
                  isActive ? 'font-bold text-blue-800' : 'text-gray-600'
                }`}>
                  {step.label}
                </p>
              </div>
            );
          })}

          {/* Connection Lines - Static without highlighting */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {steps.slice(0, -1).map((step, index) => {
              const nextStep = steps[index + 1];
              
              return (
                <line
                  key={`line-${index}`}
                  x1={`${step.x}%`}
                  y1={`${step.y}%`}
                  x2={`${nextStep.x}%`}
                  y2={`${nextStep.y}%`}
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            })}
          </svg>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-700 font-medium">
              {steps[activeStep].label}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralSynoptic;
