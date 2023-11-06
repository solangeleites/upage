import styled from 'styled-components';
import { SecondContainer } from '../../pages/home/HomeStyled';
import { mobile, tablet } from '../../queries/MediaQueries';


export const NewsletterStyle = styled.input`
  height: 50px;
  width: 400px;
  outline: none;
  border-radius: 10px;
  border: 1px solid  lightgray;
  padding: 10px;

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
  height: 50px;
  width: 200px;
  border-radius: 10px;
  bottom: 50px;
  right: 150px;
        background-color: #52BD54;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  border: none;

    &:hover {
        color: black;
    }
`
