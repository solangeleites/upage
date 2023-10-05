import styled from 'styled-components';
import { Card, ContainerCards, ContainerStyled } from '../home/HomeStyled';
import { mobile } from '../../queries/MediaQueries';

export const ContainerProducts = styled(ContainerStyled)`
  background-color: transparent;
`;

export const ContainerCardsProducts = styled(ContainerCards)`
  justify-content: center;
  align-items: center;

`;

export const CardProducts = styled(Card)`
  justify-content: baseline;
  cursor: pointer;
  &:hover {
    transition: ease 0.5s;
    background-color: grey;
  }

  ${mobile} {
      min-width: 320px;
      padding: 0 50px;
  }
`;

export const Lista = styled.ul`
& li{
  font-size: 20px;
line-height: 30px;
}

`
