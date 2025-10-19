import React from 'react';
import { mockUser } from '../../data/mockData';
import { menuItems } from '../../data/constants';
import UserMenuItem from '../common/UserMenuItem';
import DropdownMenu from './DropdownMenu';

const UserMenu = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose} position="right">
      <div className="flex items-center px-4 pb-3 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-sm font-semibold text-white mr-3">
          {mockUser.avatar ? (
            <img src={mockUser.avatar} alt={mockUser.name} className="w-10 h-10 rounded-full" />
          ) : (
            mockUser.initials
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{mockUser.name}</p>
          <p className="text-xs text-gray-500">{mockUser.email}</p>
        </div>
      </div>

      <div className="py-1">
        {menuItems.map((item) => (
          <UserMenuItem key={item.label} {...item} />
        ))}
      </div>

      <div className="pt-2 border-t border-gray-100">
        <UserMenuItem
          label="Switch Account"
          icon="/icons/switch-account.png"
        />
        <UserMenuItem
          label="Sign Out"
          icon="/icons/sign-out.png"
        />
      </div>
    </DropdownMenu>
  );
};

export default UserMenu;