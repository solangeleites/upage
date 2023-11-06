import styled from 'styled-components';
import { Card, ContainerCards } from '../home/HomeStyled';
import { mobile, tablet } from '../../queries/MediaQueries';

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 25px;


  ${tablet} {
    width: 95%;
  }
`;

export const ContainerCardsProducts = styled(ContainerCards)`
  justify-content: center;
  align-items: center;
`;

export const CardProducts = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 500px;
  border-radius: 17px;
      transition: ease 0.5s;
      border:1px solid #9EE784;



  ${tablet} {
    width: calc(100% - 150px);
    margin: 10px 0;
    height: 450px;
  }
  &:hover {
    background-color: #9EE784;
  }

  ${mobile} {
      width: 100%;
      height: 550px;
    }
`;

export const Lista = styled.ul`
  & li {
    font-size: 18px;
    line-height: 40px;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  color: black;
`;
