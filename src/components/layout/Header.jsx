import React, { useState } from "react";
import { navItems, mockUser, headerIcons } from "../../data/mockData";
import Icon from "../ui/Icon";
import UserMenu from "../ui/UserMenu";
import AppMenu from "../ui/AppMenu";
import MobileMenu from "./MobileMenu";
import Logo from "../../../public/icons/mainstack-logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleAppsClick = () => {
    setIsAppsOpen(true);
    setIsUserMenuOpen(false);
  };

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(true);
    setIsAppsOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-sm rounded-full mx-2 lg:mx-4 my-2 px-4 border-b border-gray-100 relative z-20">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-gray-800">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <button
            className="lg:hidden ml-4 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Icon src={headerIcons.menu} className="w-6 h-6" alt="Menu" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`flex items-center space-x-2 px-3 py-3 rounded-full text-sm font-medium transition-colors ${
                item.active
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon && (
                <Icon src={item.icon} className="w-4 h-4" alt={item.name} />
              )}
              <span>{item.name}</span>
            </a>
          ))}

          {/* Apps Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={handleAppsClick}
              className={`flex items-center space-x-2 px-3 py-3 rounded-full text-sm font-medium transition-colors ${
                isAppsOpen
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon src={headerIcons.apps} className="w-5 h-5" alt="Apps" />
              <span>Apps</span>
              {isAppsOpen && (
                <span className="text-gray-400 border-s border-gray-50" >{" "} Link in Bio</span>
              )}
            </button>
            <AppMenu isOpen={isAppsOpen} onClose={() => setIsAppsOpen(false)} />
          </div>
        </nav>

        {/* User Actions and Menu Trigger */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-700 transition-colors hidden sm:block">
            <Icon
              src={headerIcons.notification}
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Notifications"
            />
          </button>
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-700 transition-colors hidden sm:block">
            <Icon
              src={headerIcons.help}
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Help"
            />
          </button>

          {/* User Avatar and Menu */}
          <div className="relative">
            <button
              className="w-8 h-8 lg:w-auto lg:h-12  rounded-full lg:bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-800 overflow-hidden"
              onClick={handleUserMenuClick}
            >
              {mockUser.avatar ? (
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-auto lg:ms-2 h-auto object-cover"
                />
              ) : (
                mockUser.initials
              )}
              <Icon
                src={headerIcons.menu}
                className="w-6 h-6 mx-2 hidden lg:flex"
                alt="Menu"
              />
            </button>
            <UserMenu
              isOpen={isUserMenuOpen}
              onClose={() => setIsUserMenuOpen(false)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onAppsClick={handleAppsClick}
      />
    </>
  );
};

export default Header;
