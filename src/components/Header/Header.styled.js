import styled from "styled-components";


export const StyledHeader = styled.header `
    background-color: ${props => props.$isloggedin ? props.theme.color.primary_black_2 : 'transparent'};
    position: ${props => props.$isloggedin ? 'relative' : 'initial'};
    z-index: ${props => props.$isloggedin ? '1' : '0'};
`



export const StyledHeaderContainer = styled.div`
    display: flex;
    padding: 0.625rem 0;
    width: 100%;
    //position for the "accordion" of the mobile menu
    position: relative;
    /* z-index: 1; */

    @media screen and (min-width: 834px) {
        padding: 1rem 0;
    }
`