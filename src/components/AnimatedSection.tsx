
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0, 
  animation = 'fade-up' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1, '0px 0px -100px 0px');

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return cn(
          baseClasses,
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        );
      case 'fade-in':
        return cn(
          baseClasses,
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        );
      case 'slide-left':
        return cn(
          baseClasses,
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        );
      case 'slide-right':
        return cn(
          baseClasses,
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        );
      case 'scale-in':
        return cn(
          baseClasses,
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
