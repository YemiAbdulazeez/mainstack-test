import React from 'react';
import { apps } from '../../data/mockData';
import AppMenuItem from '../common/AppMenuItem';
import DropdownMenu from './DropdownMenu';

const AppMenu = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose} position="left">
      {apps.map((app) => (
        <AppMenuItem key={app.name} {...app} />
      ))}
    </DropdownMenu>
  );
};

export default AppMenu;