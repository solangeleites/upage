import styled from 'styled-components';
import { mobile, tablet } from '../queries/MediaQueries';

export const ContainerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 0px 92px;

  ${mobile} {
    padding: 25px;
  }
  ${tablet}{
    padding: 15px;
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
  background-color: white;


  ${mobile} {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    height: calc(100vh - 120px);
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    transition: all 0.5s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};  }
`;
