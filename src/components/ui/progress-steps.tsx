import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("flex items-center justify-between w-full max-w-2xl mx-auto", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isUpcoming = index > currentStep;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <motion.div
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                  isCompleted && "bg-primary border-primary text-primary-foreground",
                  isCurrent && "border-primary bg-background text-primary animate-pulse-slow",
                  isUpcoming && "border-muted-foreground/30 bg-background text-muted-foreground"
                )}
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </motion.div>
              <motion.p
                className={cn(
                  "mt-2 text-xs font-medium text-center transition-colors",
                  isCompleted && "text-primary",
                  isCurrent && "text-foreground",
                  isUpcoming && "text-muted-foreground"
                )}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: isCurrent ? 1 : 0.7 }}
              >
                {step}
              </motion.p>
            </div>
            {index < steps.length - 1 && (
              <motion.div
                className="flex-1 h-px bg-muted-foreground/20 mx-4 relative overflow-hidden"
                initial={false}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: isCompleted ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}