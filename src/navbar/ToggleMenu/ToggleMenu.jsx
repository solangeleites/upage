import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../context/ToggleContext';
import { Icon,HambugerContainer } from './ToggleMenuStyled';


const ToggleMenu = () => {
  const ctx = useContext(MenuContext);
  return (
    <HambugerContainer onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen} />
    </HambugerContainer>
  );
};

export default ToggleMenu;
