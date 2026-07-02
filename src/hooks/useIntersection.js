import { useState, useEffect, useRef } from 'react';

export function useIntersection(options = { threshold: 0.5 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // 1. Grab the current DOM element from the ref
    const currentElement = elementRef.current;
    
    // 2. Create the observer instance
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the element passes our visibility threshold
      setIsIntersecting(entry.isIntersecting);
    }, options);

    // 3. Start observing the element
    if (currentElement) {
      observer.observe(currentElement);
    }

    // 4. Cleanup: Disconnect the observer if the component unmounts
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Re-run if options change

  // Return the ref to attach to our HTML, and the boolean visibility state
  return [elementRef, isIntersecting];
}