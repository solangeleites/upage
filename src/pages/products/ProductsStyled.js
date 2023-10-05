import styled from 'styled-components';
import { Card, ContainerCards, ContainerStyled } from '../home/HomeStyled';

export const ContainerProducts = styled(ContainerStyled)`
  background-color: transparent;
`;

export const ContainerCardsProducts = styled(ContainerCards)`
  justify-content: center;
  align-items: baseline;

`;

export const CardProducts = styled(Card)`
  justify-content: baseline;


  cursor: pointer;
  &:hover {
    transition: ease 0.5s;
    background-color: grey;
  }
`;
