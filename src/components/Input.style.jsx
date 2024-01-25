import styled from 'styled-components';

export const InputStyled = styled.input`
    background-color: #e4e4e4;
    margin: 5px;
    padding: 10px;
    border: 2px solid #858b9f;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    transition: border-color 0.3s ease-in-out;
 
    &:focus {
        border-color: #496cf7;
        outline: none;
    }
`;


