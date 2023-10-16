import React from 'react'
import { ContainerLinks, ContainerNavbar, Logo } from './NavbarStyled'
import LinkItem from './linkItem/LinkItem'
import ToggleMenu from './ToggleMenu/ToggleMenu'
import { useContext } from 'react'
import { MenuContext } from '../context/ToggleContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const ctx = useContext(MenuContext);
  return (
    <ContainerNavbar>
        <Logo onClick={() => navigate('/')}>U PAGE</Logo>

        <ContainerLinks isOpen={ctx.isMenuOpen}>
            <LinkItem to="/">Inicio</LinkItem>
            <LinkItem to="/servicios">Servicios</LinkItem>
            {/* <LinkItem to="/blog">Blog</LinkItem> */}
            <LinkItem to="/form">Contacto</LinkItem>
        </ContainerLinks>
      <ToggleMenu />

    </ContainerNavbar>
  )
}

export default Navbar