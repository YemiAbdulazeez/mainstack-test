import React from "react";

const AppMenuItem = ({ name, description, icon, onClick }) => (
  <div
    className="flex items-center p-3 hover:border-gray-100 hover:border cursor-pointer rounded-xl transition-colors"
    onClick={onClick}
  >
    <div
      className={`w-8 h-8 rounded-md border border-gray-100 mr-3 flex items-center justify-center`}
    >
      <img src={icon} alt={name} className="w-5 h-5" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-900">{name}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

export default AppMenuItem;
