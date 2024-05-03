import styled from "styled-components";

export const StyledPageIndicator = styled.section`
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: .75rem;
    position: fixed; 
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0 1.5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 .4rem .4rem rgba(35, 31, 66, 1); 
`

// rgba(35, 31, 66, .5)