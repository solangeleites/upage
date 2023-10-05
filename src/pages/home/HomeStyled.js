import styled from 'styled-components';
import { mobile, tablet } from '../../queries/MediaQueries';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
margin: 0 auto;

${tablet}{
  max-width: 800px;
}
`;

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding: 0 92px;
  width: 90%;
  background-color: var(--naranja-pastel);

  ${tablet}{
    flex-direction: column;
    width: 95%;
     }
`;

export const Text = styled.p`
  font-size: 25px;
  margin: 25px 0;
  text-align: left;

  /* ${tablet}{
    text-align: center;
  } */
`;


export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 92px 0 92px;
  width: 100%;

  ${mobile} {
    padding: 10px;
  }

  ${tablet} {
    padding: 15px;
  }
`
export const Title = styled.h1`
  font-size: 30px;
  width: 100%;
  margin: 20px 0;
`;

export const Line = styled.p`
  width: 100%;
  height: 1px;
  background-color: grey;
  display: flex;
  margin: 0px 0px 20px 0px;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;

  ${mobile} {
    flex-direction: column;
    width: calc(100% - 0px);
  }

  ${tablet} {
    flex-direction: column;
    width: calc(100% - 0px);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 500px;
  border: 1px solid black;
  border-radius: 17px;

  ${mobile} {
  }

  ${tablet} {
    width: calc(100% - 150px);
    margin: 10px 0;
    height: 450px;

    ${mobile} {
      width: 100%;
      height: 550px;
    }
  }
`;

export const Image = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CardTitle = styled.h4`
  font-size: 20px;
  text-align: justify;
  margin: 0 30px;

  ${mobile} {
    font-size: 18px;
    font-weight: 500;
  }
`;
export const CardText = styled.p`
font-size: 20px;
text-align: left;
padding: 10px;
  ${tablet}{
    text-align: center;
  }
`
