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
    padding: 0px;
  }
  ${tablet} {
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

  ${tablet} {
    position: absolute;
    background-color: white;
    flex-direction: column;
    top: 110px;
    width: calc(100% - 25px);
    height: calc(100% - 60px);
    z-index: 2;
    transition: all 0.5s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    justify-content: center;
    gap: 50px;

    ${mobile} {
      top: 110px;
      left: 0;
      width: 100%;

    }
  }
`;
