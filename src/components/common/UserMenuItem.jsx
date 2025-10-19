import React from "react";
import Icon from "../ui/Icon";

const UserMenuItem = ({ icon, label, onClick }) => (
  <div
    className="flex items-center px-4 py-3 hover:bg-white cursor-pointer transition-colors text-sm text-gray-700"
    onClick={onClick}
  >
    <Icon src={icon} className="w-5 h-5 mr-3 text-gray-400" alt={label} />
    <span>{label}</span>
  </div>
);

export default UserMenuItem;
