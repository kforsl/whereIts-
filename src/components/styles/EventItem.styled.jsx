import styled from "styled-components";

export const StyledEventItem = styled.article`
    display: flex; 
    gap: 1.5rem; 
    align-items: center; 
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5rem; 

    section:first-of-type {
        border: 1px solid ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white}; 
        min-width: 59px; 
        padding: 1rem 1.25rem;
        
        text-align: center;
        font-size: 14px; 
        font-family:${({ theme }) => theme.fonts.fira}; 
        font-weight: 700;
        line-height: 16.8px;
    }

    span {
        display: block;
        font-size: 10px; 
        line-height: 12px;
    }

    section:last-of-type {
        display: flex; 
        justify-content: space-between;
        border-bottom: 1px solid rgba(255,255,255,.3);
        width: 100%;
        padding-bottom: .25rem;
    }

    div {
        display: flex; 
        flex-direction: column; 
        text-align: start;
        gap: .25rem;
    }

    h2 {
        font-style: normal;
        font-size: 22px
        line-height: 26.4px;
        text-shadow: 1px 1px ${({ theme }) => theme.colors.accentPink};
    }
    
    h3 {
        margin-top: auto;
        margin-bottom: 0;
        font-size: 17px;
        line-height: 20.4px;
        color: ${({ theme }) => theme.colors.accentBlue}; 
    }

    h4 {
        font-size: 12px;
        line-height: 14.4px;
        color: rgba(255,255,255,.8);  
    }

    h5 {
        font-size: 14px;
        line-height: 16.8px;
        color: rgb(208,208,208);
    }
`