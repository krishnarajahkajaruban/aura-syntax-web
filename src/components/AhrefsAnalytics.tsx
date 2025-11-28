import { useEffect } from 'react';

// Ahrefs Web Analytics data key
const AHREFS_DATA_KEY = 'wyNd+vvwwdEOMz9PvwDgAg';

const AhrefsAnalytics = () => {
  useEffect(() => {
    // Only load in browser environment
    if (typeof window === 'undefined') return;

    // Check if script is already loaded
    const existingScript = document.querySelector(`script[data-key="${AHREFS_DATA_KEY}"]`);
    if (existingScript) return;

    // Create and append Ahrefs Analytics script
    const script = document.createElement('script');
    script.src = 'https://analytics.ahrefs.com/analytics.js';
    script.async = true;
    script.setAttribute('data-key', AHREFS_DATA_KEY);
    
    // Append to head
    const head = document.getElementsByTagName('head')[0];
    if (head) {
      head.appendChild(script);
    }

    // Cleanup function (optional, but good practice)
    return () => {
      // Note: We typically don't remove analytics scripts, but this is here for completeness
      const scriptToRemove = document.querySelector(`script[data-key="${AHREFS_DATA_KEY}"]`);
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AhrefsAnalytics;

