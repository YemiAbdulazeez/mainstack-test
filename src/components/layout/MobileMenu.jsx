import React from "react";
import { navItems, headerIcons } from "../../data/mockData";
import Icon from "../ui/Icon";
import Logo from "../../../public/icons/mainstack-logo.svg";

const MobileMenu = ({ isOpen, onClose, onAppsClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-transform">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
          </div>
          <button onClick={onClose} className="p-2">
            <Icon src={headerIcons.close} className="w-6 h-6" alt="Close" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`flex items-center space-x-3 px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                item.active
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={onClose}
            >
              {item.icon && (
                <Icon src={item.icon} className="w-4 h-4" alt={item.name} />
              )}
              <span>{item.name}</span>
            </a>
          ))}

          <button
            onClick={() => {
              onAppsClick();
              onClose();
            }}
            className="flex items-center space-x-3 px-4 py-3 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 w-full text-left"
          >
            <Icon src={headerIcons.apps} className="w-5 h-5" alt="Apps" />
            <span>Apps</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
