import React, { useState } from "react";
import { sidebarApps, headerIcons } from "../../data/mockData";
import Icon from "../ui/Icon";

const AppSidebar = () => {
  const [hoveredApp, setHoveredApp] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 lg:hidden z-30 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsMobileSidebarOpen(true)}
      >
        <Icon src={headerIcons.apps} className="w-6 h-6" alt="Apps" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-2 xl:left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-white rounded-full shadow-xl p-2 space-y-3 transition-all duration-300">
          {sidebarApps.map((app, index) => (
            <div
              key={index}
              className="flex items-center group cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredApp(app.name)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  app.active
                    ? "bg-gradient-to-br from-red-100 to-purple-100"
                    : "bg-gray-100 group-hover:bg-gradient-to-br from-red-100 to-purple-100"
                }`}
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className={`w-5 h-5 transition-colors duration-200 ${
                    app.active
                      ? "text-purple-600"
                      : "text-gray-400 group-hover:text-purple-600"
                  }`}
                />
              </div>

              {hoveredApp === app.name && (
                <div className="absolute left-[52px] bg-black text-white text-xs px-3 py-3 rounded-full shadow-lg whitespace-nowrap z-50">
                  {app.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Apps</h3>
              <button onClick={() => setIsMobileSidebarOpen(false)}>
                <Icon src={headerIcons.close} className="w-6 h-6" alt="Close" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {sidebarApps.map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 rounded-xl hover:bg-white cursor-pointer"
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
                      app.active
                        ? "bg-gradient-to-br from-red-100 to-purple-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <img src={app.icon} alt={app.name} className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-center font-medium">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppSidebar;
