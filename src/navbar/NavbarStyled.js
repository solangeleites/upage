import styled from 'styled-components';
import { mobile, tablet } from '../queries/MediaQueries';

export const ContainerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0px 92px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  background-color: white;
  position: fixed;
  top: 0;

  ${mobile} {
    padding: 0px;
  }
  ${tablet} {
    padding: 15px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
    height: 70px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;


  ${tablet} {
    position: absolute;
    flex-direction: column;
    top: 240px;
    width: calc(100% - 25px);
    height: calc(100% - 60px);
    z-index: 999999;
    transition: all 0.5s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    justify-content: center;
    gap: 50px;

    ${mobile} {
      top: 220px;
      left: 0;
      width: 100%;

    }
  }
`;
