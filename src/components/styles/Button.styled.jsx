import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 3px;
    border: none;
    font-size: 1.37rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.fira};
    margin-bottom: 1rem;

`
