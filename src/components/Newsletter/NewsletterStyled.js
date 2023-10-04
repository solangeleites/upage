import styled from 'styled-components';

export const Newsletter = styled.input`
  height: 40px;
  width: 400px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;

  &:focus {
    outline: none;
  }
  :placeholder {
    font-family: 'Manrope', sans-serif;
    color: red;
  }
`;
