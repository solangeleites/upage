import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../context/ToggleContext';
import { Icon, MenuHamburger } from './ToggleMenuStyled';

const ToggleMenu = () => {
  const ctx = useContext(MenuContext);
  return (
    <MenuHamburger onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen} />
    </MenuHamburger>
  );
};

export default ToggleMenu;
