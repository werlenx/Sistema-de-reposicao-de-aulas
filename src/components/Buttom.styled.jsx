import styled from "styled-components";

export const ButtonStyled = styled.button`
    margin: 20px;
    border-radius: 1.5em;
    border: 2px solid white;

    background-color: red;
    color: #F2F4FF;
    height: 40px;
    width: 120px;
    cursor: pointer; 
    transition: background-color 0.3s ease, color 0.3s ease, font-weight 0.3s ease; /* Adiciona transições suaves */

    font-weight: bold;

    &:hover {
        background-color: darkred;
        color: white;
    }
`;
