import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  // совместимость со старыми секциями проекта
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
};

