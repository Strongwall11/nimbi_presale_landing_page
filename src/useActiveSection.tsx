// useActiveSection.tsx
import { useState, useEffect } from 'react';

const useActiveSection = (sectionRefs: { [key: string]: React.RefObject<HTMLElement> }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs);
      let currentSection = ''

      sections.forEach((section) => {
        const element = sectionRefs[section].current;
        
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <=300 && rect.bottom >= 100) {
            
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handler to set initial active section
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return activeSection;
};

export default useActiveSection;
