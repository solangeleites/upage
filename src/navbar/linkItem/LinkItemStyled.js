import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(NavLink)`
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    padding: 0 10px;
    color: grey;
    transition: all 0.5s ease;
    &:hover {
        color: black; 
    }
`