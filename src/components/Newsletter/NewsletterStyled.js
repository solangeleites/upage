import styled from 'styled-components';
import { SecondContainer } from '../../pages/home/HomeStyled';
import { mobile, tablet } from '../../queries/MediaQueries';
export const NewsletterStyle = styled.input`
  height: 40px;
  width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid  transparent;

  &:focus {
    outline: none;
  }
  &::placeholder{
    font-family: 'Manrope', sans-serif;
    font-size: 15px;

  }

  ${tablet} {
    padding: 10px;
  }

  ${mobile} {
    width:300px;

  }
`;

export const ContainerNewsletter = styled(SecondContainer)`
  height: 350px;
  padding: 0 92px;
  width: 90%;
  background-color: var(--naranja-pastel);
  margin-top:50px;

    ${tablet} {
    padding: 0px 20px;
    height: 300px;    
    width: 95%;
     
  }
`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

${mobile} {
  flex-direction: column;
}
`

export const Button = styled.button`
  height: 40px;
  width: 100px;
  outline: none;
  border-radius: 5px;
  border: 1px solid  transparent;
  background-color: white;
  transition: 0.5s ease;
  font-family: 'Manrope', sans-serif;

  &:hover{
    cursor: pointer;
    background-color: black;
    color: white;
  }
`
