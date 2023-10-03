import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 3px;
  border: 1px solid black;
  bottom: 50px;
  right: 150px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

    &:hover {
        background-color: black;
        color: white;
    }
`;