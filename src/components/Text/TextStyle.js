import styled from "styled-components";
import { mobile } from "../../queries/MediaQueries";

export const Title = styled.h1`
    font-size: 50px;
    color: black;
    margin: 0;
    `;

    export const Paragraph = styled.p`
    font-size: 20px;
    ${mobile}{
              min-width: 310px;

    }
`;