
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressDotsProps {
  totalSteps: number;
  currentStep: number;
  onDotClick: (step: number) => void;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ 
  totalSteps, 
  currentStep,
  onDotClick
}) => {
  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex items-center justify-center min-w-max">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div 
                className={cn(
                  "progress-dot-line",
                  index < currentStep && "completed"
                )}
              />
            )}
            <button
              onClick={() => onDotClick(index + 1)}
              className={cn(
                "progress-dot",
                currentStep === index + 1 && "active",
                currentStep > index + 1 && "completed"
              )}
              aria-label={`Ir para a pergunta ${index + 1}`}
            >
              {index + 1}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressDots;
