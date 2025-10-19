import React from 'react';

const Icon = ({ d, src, className = "w-5 h-5", alt = "" }) => {
  if (src) {
    // Image icon
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
      />
    );
  }
  
  // SVG icon
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
    </svg>
  );
};

export default Icon;