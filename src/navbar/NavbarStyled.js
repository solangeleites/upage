import styled from 'styled-components';

import { mobile } from '../queries/MediaQueries';

export const ContainerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 90px;

  ${mobile} {
    padding: 15px;
    position: relative;
  }
`;

export const Logo = styled.h1`
  font-size: 50px;
  cursor: pointer;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;


  ${mobile} {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    height: calc(100vh - 20px);
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    transition: all 0.5s ease-in-out;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  }
`;
