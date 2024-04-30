import styled from "styled-components";

export const StyledPageIndicator = styled.section`
    position: absolute; 
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: .75rem;

    div {
        background-color: rgba(255,255,255,.3);
        border-radius: 50%;
        height: .5rem;
        width: .5rem;
    }
`