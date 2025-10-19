import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

const DropdownMenu = ({ 
  isOpen, 
  onClose, 
  children, 
  position = "right",
  className = "" 
}) => {
  const dropdownRef = React.useRef();

  useClickOutside(dropdownRef, onClose);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className={`absolute mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 origin-top-right z-30 ${
        position === "left" ? "left-0 origin-top-left" : "right-0 origin-top-right"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;