import styled from 'styled-components';

export const ContainerBlog = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ContainerCards = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
flex-wrap: wrap;
gap: 25px;

`

export const Card = styled.div`
height: 600px;
width: 420px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid black;
border-radius: 10px;
padding: 10px;

`
export const Image = styled.img`
height: 300px;
width: 420px;
border-radius: 10px;
`

export const Title = styled.h2`
`

export const Paragraph = styled.p`
font-weight:400;
`