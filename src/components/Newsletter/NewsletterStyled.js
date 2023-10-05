import styled from 'styled-components';
import { SecondContainer } from '../../pages/home/HomeStyled';

export const NewsletterStyle = styled.input`
  height: 40px;
  width: 400px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid  transparent;
  &:focus {
    outline: none;
  }
  &::placeholder{
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
  }
`;

export const ContainerNewsletter = styled(SecondContainer)`
  height: 350px;
  width: 1500px;
  background-color: var(--naranja-pastel);
  margin-top:50px;
`;
