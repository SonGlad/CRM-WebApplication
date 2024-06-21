import styled from "styled-components";


export const StyledHeader = styled.header `
    background: ${props => props.$isloggedin ? 'linear-gradient(45deg, #e0e0e0, #3498db4f)' : 'transparent'};
    position: ${props => props.$isloggedin ? 'relative' : 'initial'};
    z-index: ${props => props.$isloggedin ? '1' : '0'};
`


export const StyledHeaderContainer = styled.div`
    display: flex;
    padding: 0.625rem 0;
    width: 100%;
    position: relative;

    @media screen and (min-width: 834px) {
        padding: 1rem 0;
    }
`